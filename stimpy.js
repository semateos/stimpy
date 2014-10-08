#!/usr/bin/env node

require('shelljs/global');

var cli = require('cli').enable('status'),
	fs = require('fs');
	_ = require('underscore-node');

var config = {

	repo: 'https://github.com/semateos',
}

cli.parse({});

//run a 'script' of console commands:
var run = function(script, cli){

	//if the script is a string, run it
	if(typeof script === 'string'){

		console.log(script);

		var outcome = exec(script);

		if (outcome.code !== 0) {
			cli.error(outcome.output);
			exit(1);
		}

	//otherwise if the script is an array, run each line
	}else if(Array.isArray(script)){

		_.each(script, function(line){

			console.log(line);

			var outcome = exec(line);

			if (outcome.code !== 0) {
				cli.error(outcome.output);
				exit(1);
			}
		});
	}
}

//create a new starter project based on a repo
cli.create = function(type, location){

	if(!location){

		location = '';
		console.log('I am creating for you now: ' + type);

	}else{

		console.log('I am creating for you now: ' + type + ' at: ' + location);
	}	

	var outcome = exec('git clone ' + config.repo + '/stimpy-' + type + '.git ' + location);

	this.debug(outcome);

	if (outcome.code !== 0) {
	  this.error(outcome.output);
	  exit(1);
	}

	cd(location);

	var outcome = exec('npm install');

	this.debug(outcome);

	if (outcome.code !== 0) {
	  this.error(outcome.output);
	  exit(1);
	}

	cd('..');
	
}

//start the local server
cli.start = function(env){

	if(!env){
		env = 'development';
	}

	if(process.platform === 'win32'){

		run('set NODE_ENV=' + env + ' && npm start', this);

	}else{

		run('NODE_ENV=' + env + ' npm start', this);
	}
}


//deploy
cli.deploy = function(type, branch){

	//default branch to deploy is master
	if(branch == undefined){

		branch = 'master';
	}

	switch(type){

		//deploy to heroku
     	case 'heroku':

			var script = [
 				'heroku create',
 				'git push heroku ' + branch,
 				'heroku open'
 			];

 			var remotes = exec('git remote').output;

 			this.debug(remotes);

 			var has_heroku = remotes.indexOf('heroku');

 			this.debug(has_heroku);

 			//if heroku app has already been created:
     		if(has_heroku >= 0){

     			script = [
	 				'git push heroku ' + branch,
	 				'heroku open'
	 			];
     		}

     		run(script, this);

     		break;
    }
}

//emulate on mobile devices using cordova
cli.emulate = function(type){

	switch(type){

		//emulate the app on ios sim
     	case 'ios':

     		if(process.platform === 'win32'){

				run('set NODE_ENV=cordova && gulp cordova', this);

			}else{

				run('NODE_ENV=cordova gulp cordova', this);
			}

     		//run('gulp cordova', this);

			cd('./cordova');

			run('cordova emulate ios', this);

			cd('..');

			//run('NODE_ENV=development npm start', this);

     		break;
    }
}

//cli starts here
cli.main(function(args, options) {
    
    this.debug(args);
    this.debug(options);

     var operation = args[0];

     console.log('Aye captain!');

     switch(operation){

     	case 'create':

     		cli.create(args[1], args[2]);
     		break;

     	case 'start':

     		cli.start();
     		break;

     	case 'deploy':

     		cli.deploy(args[1], args[2]);
     		break;

     	case 'emulate':

     		cli.emulate(args[1]);
     		break;
     }
    
});

