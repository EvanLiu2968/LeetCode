/**
 * Time:  O(n)
 * Space: O(1)

 * Given two non-negative numbers num1 and num2 represented as string,
 * return the sum of num1 and num2.
 *
 * Note:
 *
 * The length of both num1 and num2 is < 5100.
 * Both num1 and num2 contains only digits 0-9.
 * Both num1 and num2 does not contain any leading zero.
 * You must not use any built-in BigInteger library or
 * convert the inputs to integer directly.
 */
'use strict';

function padNum(num) {
  return num ? parseInt(num) : 0
}

module.exports = function addStrings(num1 = '0', num2 = '0', byte = 10) {
  if (typeof num1 !== 'string' || typeof num2 !== 'string') return 0;
  
  const arr1 = num1.split('').reverse(), arr2 = num2.split('').reverse(), res = [];
  let len = Math.max(arr1.length, arr2.length)
  for(let i = 0; i < len; i++){
    let num = padNum(arr1[i]) + padNum(arr2[i]) + padNum(res[i])
    if(num >= byte){
      res[i] = num - byte
      res[i+1] = 1
    }else{
      res[i] = num
    }
  }
  return res.reverse().join('')
}