'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isString(str)).toBeTruthy();
    let testArr = [num , arr ,obj , func , bool];
    testArr.forEach((val) => {
      expect(validator.isString(val)).toBeFalsy();
    });
  });

  it('numbers', () => {
    let num = 1;
    expect(validator.isAnumber(num)).toBeTruthy();
  });

  it('arrays', () => {
    let arr = ['a'];
    expect(validator.isAnArray(arr)).toBeTruthy();
  });

  it('objects', () => {
    let obj = {x:'y'};
    // console.log(validator.isAnObject(obj));
    expect(validator.isAnObject(obj)).toBeTruthy();
  });

  it('booleans', () => {
    let bool = false;
    expect(validator.isAbolean(bool)).toBeTruthy();
  });

  it('functions', () => {
    let func = () => {};
    expect(validator.isAfunction(func)).toBeTruthy();
  });

});



describe('validator module performs complex validations', () => {
  let testObject = {
    name : 'abdulrhman',
    job : 'Demons Slayer',
    level : 9 ,
    styles : [ 'royal gurd', 'sword master' , 'trick' , 'guns master'] ,
    mortal : true
  };
  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(validator.isString(testObject.hi?testObject.hi:false)).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(validator.isAnumber(testObject.level)).toBeTruthy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(validator.isAnArray(testObject.styles)).toBeTruthy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(validator.isAbolean(testObject.mortal)).toBeTruthy();
  });

  // TODO: Cover so, so many more cases

  it('the array elements should be strings' , () => {
    expect(validator.isString(testObject.styles[0])).toBeTruthy();
  })

});

