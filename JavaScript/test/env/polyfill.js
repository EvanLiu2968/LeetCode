require('babel-polyfill');
const assert = require('assert');

assert.equalObj = function(){
  arguments[0] = JSON.stringify(arguments[0]);
  arguments[1] = JSON.stringify(arguments[1]);
  return assert.equal.apply(assert, arguments)
}