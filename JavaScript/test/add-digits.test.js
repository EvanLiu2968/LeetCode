'use strict';

const assert = require('assert');
const addDigits = require('../src/add-digits')

describe('add-digits', function() {

  it(`should return 2 when the arguments is 38`, function() {
    assert.equal(addDigits(38), 2);
  });

  it(`should return 8 when the arguments is -26.8`, function() {
    assert.equal(addDigits(-26.8), 8);
  });
});