#!/usr/bin/env node

require('shelljs/global');

var cli = require('cli').enable('status'),
	fs = require('fs');
	_ = require('underscore-node');

var config = {

	repo: 'https://github.com/semateos',
}

cli.parse({
    test:   ['t', 'test'],
    port:  ['p', 'port', 'number', 8080]
});

//create a new starter project based on a repo
cli.create = function(type, location){

	if(!location){

		location = '';
		console.log('Creating: ' + type);

	}else{

		mkdir('', location);
		console.log('Creating: ' + type + ' at ' + location);
	}	

	//make a clone of the boilerplate at the desired location	
	var command = 'git clone ' + config.repo + '/stimpy-' + type + '.git ' + location;

	if (exec(command).code !== 0) {
	  this.error('Error: Git commit failed');
	  exit(1);
	}
	
}

//deploy
cli.deploy = function(type, branch){

	switch(type){

     	case 'heroku':



     		break;
    }
}

//cli starts here
cli.main(function(args, options) {
    
    this.debug(args);
    this.debug(options);

     var operation = args[0];

     switch(operation){

     	case 'create':

     		cli.create(args[1], args[2]);
     		break;

     	case 'deploy':

     		cli.deploy(args[1], args[2]);
     		break;
     }

    //this.debug('Port: ' + options.test);
    //this.debug('Port: ' + options.port);
    
});

