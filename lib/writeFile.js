const fs = require('fs');
const chalk = require('chalk');

const writeFile = (name, extension, template) => {
	const filename = name + extension;

	fs.writeFile(filename, template(name), (err) => {
		if(err) {
			return console.log(chalk.red(err));
		}

		console.log(chalk.green(`${filename} created`));
	});
}

module.exports = writeFile;
