"use strict"

/* #################### Day 1 */

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

/* #################### Day 2 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  const len = s.length;
  let sRef = {};
  let tRef = {};
  let sChar;
  let tChar;

  for (let i = 0; i < len; i++) {
      sChar = s[i], tChar = t[i];
      if (sChar in sRef && sRef[sChar] !== tChar) {
          return false;
      } else if (tChar in tRef && tRef[tChar] !== sChar) {
          return false;
      } else {
          sRef[sChar] = tChar;
          tRef[tChar] = sChar;
      }
  }
  return true
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
  if (!s.length) return true;
  const len =  t.length;
  const fin = s.length - 1;
  let sIdx = 0;
  let tIdx = 0;

  while (tIdx < len) {
      if (s[sIdx] === t[tIdx]) {
          if (sIdx === fin) return true;
          sIdx += 1;
      }
      tIdx += 1;
  }
  return false;
};
