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
var romanToInt = function (s) {
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
    };

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
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i + 1]) {
            nums[start] = nums[i];
            start++;
        }
    }
    return start;
};

/**
 * Notes:
 * - nums not sorted
 * Plan
 * - work from the front, O(n*m)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var NaiveTwoSum = function(nums, target) {
    const len = nums.length - 1;
    let left = 0;
    let right = 1;

    while (left < len) {
        let sum  = nums[left] + nums[right];
        if (sum === target) {
            return [left, right];
        } else if (right === len) {
            left += 1;
            right = left + 1;
        } else {
            right += 1;
        }
    }
};

function twoSum(nums, target) {
    const numsRef = {};
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        let num = nums[i];
        if (num in numsRef) {
            numsRef[num].push(i);
        } else {
            numsRef[num] = [i];
        }
    }
    for (let i = 0; i < len; i++) {
        let num = nums[i];
        let diff = target - num;
        if (diff in numsRef) {
            let idxOne = numsRef[num][0];
            let idxTwo = numsRef[diff][0];
            if (numsRef[diff].length === 2) {
                return numsRef[diff];
            } else if (idxOne !== idxTwo) {
                return [idxOne, idxTwo];
            }
        }
    }
};

/**
 * Time Complexity: O(n^2)
 * Space Space Complexity: O(n)
 *
 * Approach: Nested for loop
 */
var naiveLengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let len = s.length
    let set = new Set();

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            if (!set.has(s[j])) {
                set.add(s[j]);
                maxLen = Math.max(maxLen, set.size)
            } else {
                set.clear();
                break;
            }
        }
    }
    return maxLen
};

/**
 * Time Complexity: O(n)
 * Space Space Complexity: O(n)
 *
 * Approach: Sliding Window
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let len = s.length
    let i = 0;
    let j = 0;
    let set = new Set();

    while (j < len) {
        if (!set.has(s[j])) {
            set.add(s[j]);
            maxLen = Math.max(maxLen, set.size)
            j++;
        } else {
            set.delete(s[i]);
            i++;
        }
    }

    return maxLen
};