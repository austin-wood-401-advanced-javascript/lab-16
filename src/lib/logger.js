'use strict';

const events = require('./events.js');

const logger = module.exports = exports = {};

/**
 *
 * This function handles errors that occur when trying to run the uppercasing function. 
 * @param {*} payload
 */
logger.err = (payload) => {
  if (payload){
    console.error(payload);
  }
};

/**
 *
 *
 * @param {*} payload
 * This function just lets the users know that the document saved by console logging the success message.
 */
logger.save = (payload) => {
  if(payload) {
    console.log(payload);
  }
};

events.on('file-save', logger.save);
events.on('file-error', logger.err);
