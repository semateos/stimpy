#!/usr/bin/env node

var cli = require('cli').enable('status'); //Enable 2 plugins

cli.parse({
    test:   ['t', 'test'],
    port:  ['p', 'port', 'number', 8080]
});

cli.main(function(args, options) {
    
    console.log(args);

    this.debug('Port: ' + options.test);
    this.debug('Port: ' + options.port);
});