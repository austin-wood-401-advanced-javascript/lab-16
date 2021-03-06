'use strict';

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const events = require('./events.js');

const loadFile = (file) => readFile(file);
const saveFile = (file,buffer) => writeFile(file,buffer);
const convertBuffer = buffer => Buffer.from(buffer.toString().trim().toUpperCase());

/**
 *
 *
 * This function takes in the file and uses event driven programming to uppercase and save the file then returns a success message to the user. 
 * @param {*} file
 * @returns Uppercased file. 
 */
const alterFile = (file) => {
  return loadFile(file)
    .then(buffer => convertBuffer(buffer) )
    .then(buffer => saveFile(file,buffer) )
    .then( success => events.emit('file-save', {message: 'It Saved!', feelGood: 'yes'} ))
    .catch(error => events.emit('file-error', {message: 'it bugged out yo', feelGood: 'no.', whyTho: error}));
};

module.exports = {alterFile, loadFile, saveFile, convertBuffer};
