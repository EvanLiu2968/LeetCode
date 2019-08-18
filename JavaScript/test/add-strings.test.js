'use strict';

const assert = require('assert');
const addStrings = require('../src/add-strings')

describe('add-strings', function() {

  it(`should return 236 when the arguments is 187, 49`, function() {
    assert.equal(addStrings('187', '49'), '236');
  });

  it(`should return 0 when the arguments is 0, 0`, function() {
    assert.equal(addStrings('0', '0'), '0');
  });
});