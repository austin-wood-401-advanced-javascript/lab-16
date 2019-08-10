'use strict';

const files = require('./src/lib/files.js');
require('./src/lib/logger.js');

let file = process.argv.slice(2).shift();
files.alterFile(file);
