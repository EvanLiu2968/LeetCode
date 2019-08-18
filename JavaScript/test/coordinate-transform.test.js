'use strict';

const assert = require('assert');
const { sphericalToThree, threeToSpherical } = require('../src/coordinate-transform')

describe('coordinate-transform', function() {

  it(`should return spherical coordinate to three`, function() {
    assert.equalObj(sphericalToThree(1, 45, 45), sphericalToThree(1, 45, 45));
  });

  it(`should return three coordinate to spherical`, function() {
    assert.equalObj(threeToSpherical(1, 1, 1), threeToSpherical(1, 1, 1));
  });
});