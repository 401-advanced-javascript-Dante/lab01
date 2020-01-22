'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {

  let isArray = input instanceof Array ;
  if(!isArray){

    return true;
  }
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};


/**
 * Is this a number?
 * @param value
 * @returns {boolean}
 */

validator.isAnumber = (value) => {
  return typeof value === 'number' ;
};

/**
 * Is this an array?
 * @param value
 * @returns {boolean}
 */

validator.isAnArray = (value) => {
  return typeof value[0] === 'string' ;
};

/**
 * Is this an object?
 * @param value
 * @returns {boolean}
 */
validator.isAnObject = (value) => {
  let test = Object.keys(value) ;
  return typeof test[0] === 'string' ;
};


/**
 * Is this a boolean?
 * @param value
 * @returns {boolean}
 */
validator.isAbolean= (value) => {
  return typeof value === 'boolean' ;
};


/**
 * Is this a function?
 * @param value
 * @returns {boolean}
 */
validator.isAfunction= (value) => {
  return typeof value === 'function' ;
};










