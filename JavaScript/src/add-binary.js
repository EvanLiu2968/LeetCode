/**
 * Time:  O(n)
 * Space: O(1)
 *
 * Given two binary strings, return their sum (also a binary string).
 *
 * For example,
 * a = "11"
 * b = "1"
 * Return "100".
 *
 */
'use strict';
const addStrings = require('./add-strings');

module.exports = function addBinary(num1 = '0', num2 = '0') {
  return addStrings(num1, num2, 2)
}