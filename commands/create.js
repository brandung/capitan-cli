const writeFile = require('../lib/writeFile');
const checkFolder = require('../lib/checkFolder');
const hbsTemplate = require('../templates/hbs');
const jsTemplate = require('../templates/javascript');
const scssTemplate = require('../templates/scss');

const create = (name) => {
	// change to components directory
	try {
		// TODO: change hardcoded string to config variable read from a file that exists in the current working directory
		process.chdir('./src/components');
	} catch (err) {
		console.error(`chdir: ${err}`);
	}
	// check if directory exists (= if folder exists)
	checkFolder(name, () => {
		// change to component directory after creating it
		try {
			process.chdir(name);
		} catch (err) {
			console.error(`chdir: ${err}`);
		}

		try {
			writeFile(name, '.hbs', hbsTemplate);
			writeFile(name, '.js', jsTemplate);
			writeFile(name, '.scss', scssTemplate);
		} catch(err) {
			console.log(chalk.red(err));
		}
	});
}

module.exports = create;
