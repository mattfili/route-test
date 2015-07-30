var chalk = require('chalk');
require('./lib/challk')(1337)

console.log('Server running on' + chalk.red.bold.underline('http://localhost:1337'));