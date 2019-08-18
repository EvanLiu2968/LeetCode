'use strict';

const assert = require('assert');
const addTwoNumbers = require('../src/add-two-numbers')

describe('add-two-numbers', function() {

  it(`should return [7,0,8] when the arguments is [2,4,3], [5,6,4]`, function() {
    assert.equalObj(addTwoNumbers([2,4,3], [5,6,4]), [7,0,8]);
  });

  it(`should return [2,3,1,1] when the arguments is [9,6,8], [3,6,2]`, function() {
    assert.equalObj(addTwoNumbers([9,6,8], [3,6,2]), [2,3,1,1]);
  });
});