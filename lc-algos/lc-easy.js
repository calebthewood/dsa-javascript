"use strict";
/***************************************************** Easy: Roman to Integer */
/**
 * Converts a valid string of roman numerals into an integer.
 *
 * Example:  "LVIII" --> 58
 *
 * Explanation:   L = 50, V= 5, III = 3.
 *
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  let sum = 0;
  let len = s.length;

  const numerals = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
  }

for (let i = 0; i <= len; i++) {
  let j = i + 1;
  let curr = s[i];
  let next = s[j] || s[i];

  if (numerals[curr] >= numerals[next]) {
      sum += numerals[curr];
  } else if (numerals[curr] < numerals[next]) {
      sum += numerals[next] - numerals[curr];
      i++;
      }
  }
  return sum;
};

/************************************************** Easy: Invert Binary Tree  */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function invertTree(root) {
  if (!root) return root;
  const nodeStack = [root];

  while (nodeStack.length > 0) {
      let current = nodeStack.pop();
      let temp = current.left;
      current.left = current.right;
      current.right = temp;

      if (current.left) {
          nodeStack.push(current.left);
      }
      if (current.right) {
          nodeStack.push(current.right);
      }
  }
  return root;
};


/*********************************** Easy: Remove Duplicates from Sorted Array*/
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let start = 0;
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] != nums[i+1]){
          nums[start] = nums[i];
          start++;
      }
  }
  return start;
};