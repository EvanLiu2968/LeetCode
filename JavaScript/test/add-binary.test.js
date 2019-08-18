'use strict';

const assert = require('assert');
const addBinary = require('../src/add-binary')

describe('add-binary', function() {

  it(`should return 100 when the arguments is 11, 1`, function() {
    assert.equal(addBinary('11', '1'), '100');
  });

  it(`should return 1001 when the arguments is 110, 11`, function() {
    assert.equal(addBinary('110', '11'), '1001');
  });
});