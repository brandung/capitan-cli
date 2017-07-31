const fs = require('fs');
const chalk = require('chalk');

const checkFolder = (name, callback) => {
	fs.stat(name, (err, stats) => {
		// err means the folder doesn't exist
		if (err) {
			return fs.mkdir(name, callback);
		} else if(stats.isDirectory()) {
			return console.log(chalk.bgRed(`${chalk.bold(name)} already exists!`));
		}
	});
}

module.exports = checkFolder;
