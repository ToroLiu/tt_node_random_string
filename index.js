#!/usr/bin/env node

var program = require('commander');

var lib = require('./my_lib');

function parse10(val) {
    // radix 10
    return parseInt(val, 10);
}

program.version('1.0.3')

program.command('uuid')
    .description('Generate uuid string')
	.action(function() {
		lib.string_uuid();
	});
	
program.command('hex')
    .description('Generate hex random string')
    .option('-b, --bytes <value>', 'The number of bytes of hex', parse10, 16)
    .action(function(options) {
    	var bytes = options.bytes;
    	lib.string_hex(bytes);
    });

program.command('hex_array')
    .description('Generate hex array. Ex: { 0x01, 0xab, 0x3a }')
    .option('-b, --bytes <value>', 'The number of bytes', parse10, 16)
    .action(function(options) {
    	var bytes = options.bytes;
    	lib.string_hex_array(bytes);
    });

program.command('string')
    .description('Generate secure random string.')
    .option('-l, --length <value>', 'The length of string', parse10, 16)
    .action(function(options) {
    	var length = options.length;
    	lib.string_secure_random(length);
    });

program.parse(process.argv);	

if (program.args.length === 0) program.help()