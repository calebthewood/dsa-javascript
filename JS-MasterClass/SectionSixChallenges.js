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

function averagePair(ints, target) {
  if (ints.length < 2) return false;

  let avg;
  let left = 0;
  let right = ints.length - 1;

  while (left < right) {
    avg = (ints[left] + ints[right]) / 2;

    if (avg > target) {
      right--;
    } else if (avg < target) {
      left++;
    } else {
      return true;
    }
  }
  return false;
}

console.log(averagePair([1,2,3],2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([],4)); // false
