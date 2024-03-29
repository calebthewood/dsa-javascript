"use strict";


/*************************************** Frequency Counter - sameFrequency */

function frequencyCounter(items) {
  const freqs = {};
  for (let item of items) {
    freqs[item] = freqs[item] + 1 || 1;
  }
  return freqs;
}

function sameFrequency(numA, numB) {
  const digitsA = frequencyCounter(numA.toString());
  const digitsB = frequencyCounter(numB.toString());

  for (let digit in digitsA) {
    if (digitsA[digit] !== digitsB[digit]) {
      return false;
    }
  }
  console.log(digitsA);
  console.log(digitsB);
  return true;
}

// console.log(sameFrequency(182,281)) // true
// console.log(sameFrequency(34,14)) // false
// console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22,222)) // false

/**************** Frequency Counter / Multiple Pointers - areThereDuplicates */

/**
 * Time Complexity: O(n * m)
 * Space Complexity: O(1)
 * @param  {...any} args
 * @returns {boolean}
 */
function areThereDuplicatesPointers(...args) {
  if (args.length < 2) return false;
  let p1 = 0;
  let p2 = 1;
  let len = args.length - 1;

  while (p1 < len) {
    let left = args[p1];
    let right = args[p2];

    if (left === right) return true;
    if (p2 === len) {
      p1++;
      p2 = p1 + 1;
    } else {
      p2++;
    }
  }
  return false;
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param  {...any} args
 * @returns {boolean}
 */
function areThereDuplicatesHeap(...args) {
  if (args.length < 2) return false;
  let reference = {};

  for (let arg of args) {
    if (arg in reference) {
      return true;
    } else {
      reference[arg] = 1;
    }
  }
  return false;
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param  {...any} args
 * @returns {boolean}
 */
function areThereDuplicatesSet() {
  return new Set(arguments).size !== arguments.length;
}

// console.log(areThereDuplicates(1, 2, 3)) // false
// console.log(areThereDuplicates(1, 2, 2)) // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true

/******************************************* Multiple Pointers - averagePair */

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {[Number]} ints
 * @param {Number} target
 * @returns {Boolean} boolean
 */
function averagePair(ints, target) {
  if (ints.length < 2) return false;

  let avg;
  let left = 0;
  let right = ints.length - 1;

  while (left < right) {
    avg = (ints[left] + ints[right]) / 2;

    if (avg > target) {
      right -= 1;
    } else if (avg < target) {
      left += 1;
    } else {
      return true;
    }
  }
  return false;
}

// console.log(averagePair([1,2,3],2.5)); // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
// console.log(averagePair([],4)); // false

/***************************************** Multiple Pointers - isSubsequence */

/** Wrote the wrong function but it might come in handy later... */
function isSubstring(substring, string) {
  let idx = 0;
  let count = 0;
  let subLen = substring.length;
  let term = string.length - subLen;

  while (idx < term) {
    if (substring[idx] === substring[idx]) {
      count += 1;
      if (count === subLen) {
        return true;
      }
    } else {
      count = 0;
    }
    idx += 1;
  }
  return false;
}

/**Accepts string or array and returns a reversed array to be used as a stack*/
function toStack(items) {
  const stack = [];
  let idx = items.length - 1;
  while (idx >= 0) {
    stack.push(items[idx]);
    idx -= 1;
  }
  return stack;
}

/**
 * Time Complexity: O(n+m)
 * Space Complexity: O(n)
 * @param {String} subSequence
 * @param {String} sequence
 * @returns {Boolean} boolean
 */
function isSubsequence(subSequence, sequence) {
  let subStack = toStack(subSequence);
  let current = subStack.pop();

  for (let item of sequence) {
    if (item === current) {
      if (subStack.length === 0) {
        return true;
      }
      current = subStack.pop();
    }
  }
  return false;
}

/** From Solution */
function isSubsequenceRecursive(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
/** From Solution */
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)

/*************************************** Sliding Window - maxSubarraySum */

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {[Number]} array
 * @param {Number} n
 * @returns {Number}
 */
function maxSubarraySum(array, n) {
  const len = array.length;
  if (n > len) return null;
  let sum = 0;
  let maxSum = -Infinity;
  for (let i = 0; i < len; i++) {
    sum += array[i];
    if (i >= n) {
      sum -= array[i - n];
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}

// console.log(maxSubarraySum([100,200,300,400], 2)); // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));  // 39
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
// console.log(maxSubarraySum([2,3], 3)); // null

/*************************************** Sliding Window - minSubArrayLen */


/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {[Number]} array
 * @param {Number} n
 * @returns {Number}
 * note: had to review solution to get this one right.
 */
function minSubArrayLen(array, n) {
  const len = array.length;
  if (len < 1) return 0;
  let minWidth = Infinity;
  let start = 0;
  let end = 0;
  let sum = 0;

  while (start < len) {
    if (sum < n) {
      sum += array[end];
      end += 1;
    } else if (sum >= n) {
      minWidth = Math.min(minWidth, end - start);
      sum -= array[start];
      start += 1;
    } else {
      break;
    }
  }
  return minWidth === Infinity ? 0 : minWidth;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

/************************************* Sliding Window - findLongestSubstring */
/** Didn't end up using this */
function recordInstances(items) {
  const instances = {};
  items.forEach((item, idx) => {
    if (item in instances) {
      instances[item].push(idx);
    } else {
      instances[item] = [idx];
    }
  });
  return instances;
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {String} str
 * @returns {Number}
 */
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

// console.log(findLongestSubstring('')); // 0
// console.log(findLongestSubstring('rithmschool')); // 7
// console.log(findLongestSubstring('thisisawesome')); // 6
// console.log(findLongestSubstring('thecatinthehat')); // 7
// console.log(findLongestSubstring('bbbbbb')); // 1
// console.log(findLongestSubstring('longestsubstring')); // 8
// console.log(findLongestSubstring('thisishowwedoit')); // 6

