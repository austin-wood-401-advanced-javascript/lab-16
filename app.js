'use strict';

const files = require('./src/lib/files.js.js');
require('./src/lib/logger.js.js');

let file = process.argv.slice(2).shift();
files.alterFile(file);
