"use strict"

/* ##### Day 1 */

/** Returns an array or running sums relative to the input array
 * @param {number[]} nums
 * @return {number}
 */
var runningSum = function(nums) {
  let sum = 0;
  return nums.map(num => sum += num);
};


/** Finds the index in an array where the sum left of
 *  idx == sum right of idx, element at idx is excluded
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
  let sum = 0;
  let sums = nums.map(num => sum += num);
  for (let i = 0; i < sums.length; i++) {
      if (sums[i] - nums[i] === sum - sums[i]) return i;
  }
  return -1;
};
