'use strict';

const validator = require('./lib/validator.js');

const personRules = {
  fields: {
    id: {type: 'string', required: true},
    name: {type: 'string', required: true},
    age: {type: 'number', required: true},
    children: { type: 'array', valueType: 'string' },
  },
};
validator.isValid( personRules.fields );



