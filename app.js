'use strict';

const files = require('./lib/files.js');
require('./lib/logger.js');

let file = process.argv.slice(2).shift();
files.alterFile(file);
