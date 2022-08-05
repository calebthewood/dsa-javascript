"use strict";

/** Takes an iterable and an optional callback and creates a frequency counter*/
function frequencyCounter(items, callback = null) {
  let output = {};
  if (callback) {
    for (let item of items) {
      let modifiedItem = callback(item);
      output[modifiedItem] = ++output[modifiedItem] || 1;
    }
  } else {
    for (let item of items) {
      output[item] = ++output[item] || 1;
    }
  }
  return output;
}

/** */
function sameFreqs(nums, squares) {
  if (nums.length !== squares.length) return false;

  let numsFreqs = frequencyCounter(nums);
  let squarFreqs = frequencyCounter(squares, item => Math.sqrt(item));

  let keys = Object.keys(numsFreqs);

  for (let num of keys) {
    if (numsFreqs[num] !== squarFreqs[num]) {
      return false;
    }
  }
  return true;
}

console.log(sameFreqs([1,1,2,2,3], [1,1,4,4,9]))
console.log(sameFreqs([1,1,2,2,3,8,2], [1,1,4,4,9,3,5]))

/** Anagram Checker, my solution */
function isAnagram(str1, str2) {
  if (str1 === str2) return true;
  const freqsOne = frequencyCounter(str1);
  const freqsTwo = frequencyCounter(str2);

  let keys = Object.keys(freqsOne);
  for (let key of keys) {
    if (freqsOne[key] !== freqsTwo[key]) {
      return false;
    }
  }
  return true;
}

/** Anagram Checker, Colt solution */
function validAnagram(first, second) {
  const len = second.length
  if (first.length !== len) return false;

  const lookup = frequencyCounter(first);

  for (let char of second) {
    if (!lookup[char]) { // found 0 or undefined
      return false;
    } else {
      lookup[char] -= 1;
    }
  }
  return true
}

// console.log(validAnagram('', '')); // true
// console.log(validAnagram('aaz', 'zza')); // false
// console.log(validAnagram('anagram', 'nagaram')); // true
// console.log(validAnagram("rat", "car"));// false)
// console.log(validAnagram('awesome', 'awesom')); // false
// console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
// console.log(validAnagram('qwerty', 'qeywrt')); // true
// console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
