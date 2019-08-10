'use strict';

const events = require('./events.js');

const logger = module.exports = exports = {};

logger.err = (payload) => {
  if (payload){
    console.error(payload);
  }
};

logger.save = (payload) => {
  if(payload) {
    console.log(payload);
  }
};

events.on('file-save', logger.save);
events.on('file-error', logger.err);
