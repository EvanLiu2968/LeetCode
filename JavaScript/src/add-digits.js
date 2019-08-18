/**
 * Time:  O(1)
 * Space: O(1)
 *
 * Given a non-negative integer num, repeatedly add
 * all its digits until the result has only one digit.
 *
 * For example:
 *
 * Given num = 38, the process is like: 3 + 8 = 11,
 * 1 + 1 = 2. Since 2 has only one digit, return it.
 *
 * Follow up:
 * Could you do it without any loop/recursion in O(1)
 * runtime?
 *
 * Hint:
 *
 * A naive implementation of the above process is trivial.
 * Could you come up with other methods?
 */
'use strict';

module.exports = function addDigits(num = 0, byte = 10) {
  if (typeof num !== 'number') return 0;
  
  num = Math.abs(Math.ceil(num))
  if(num >= byte){
    num = num + ''
    num = num.split('').reduce(function(o,v){
      return o + parseInt(v)
    },0)
    return addDigits(num)
  }
  return num
}