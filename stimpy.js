#!/usr/bin/env node

require('shelljs/global');

var cli = require('cli').enable('status'),
	fs = require('fs');
	_ = require('underscore-node');

var config = {

	repo: 'https://github.com/semateos',
}

cli.parse({});

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

//deploy
cli.deploy = function(type, branch){

	switch(type){

     	case 'heroku':

			var script = [
 				'heroku create',
 				'git push heroku master',
 				'heroku open'
 			];

 			var remotes = exec('git remote').output;

 			this.debug(remotes);

 			var has_heroku = remotes.indexOf('heroku');

 			this.debug(has_heroku);

 			//if heroku app has already been created:
     		if(has_heroku >= 0){

     			script = [
	 				'git push heroku master',
	 				'heroku open'
	 			];
     		}

     		_.each(script, function(line){

 				var outcome = exec(line);

 				if (outcome.code !== 0) {
				  this.error(outcome.output);
				  exit(1);
				}
 			})

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

     	case 'deploy':

     		cli.deploy(args[1], args[2]);
     		break;
     }
    
});

