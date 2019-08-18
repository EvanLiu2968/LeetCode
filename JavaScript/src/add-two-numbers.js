/**
 * Time:  O(n)
 * Space: O(1)
 *
 * You are given two linked lists representing two non-negative numbers.
 * The digits are stored in reverse order and each of their nodes contain
 * a single digit.
 * Add the two numbers and return it as a linked list.
 *
 * Input: [2, 4, 3) + [5, 6, 4]
 * Output: [7, 0, 8]
 *
 */
'use strict';

function padNum(num) {
  return num ? num : 0
}

module.exports = function addTwoNumbers(nums = [], target = [], byte = 10) {
  if(!Array.isArray(nums) || !Array.isArray(target)) return [];

  let len = Math.max(nums.length, target.length);
  let output = [];
  for(let i = 0; i < len; i++){
    output[i] = padNum(nums[i]) + padNum(target[i]) + padNum(output[i])
    if(output[i] >= byte){
      output[i] = output[i] - byte
      output[i+1] = 1
    }
  }
  return output
}