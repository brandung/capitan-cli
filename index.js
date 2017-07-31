const fs = require('fs');
const program = require('commander');
const chalk = require('chalk');

const create = require('./commands/create');

program
	.version('0.0.1')
	.command('create <name>')
	.description('Creates a new component')
	.action(name => create(name));

program.parse(process.argv);
