"use strict";


/*************************************** Frequency Counter - sameFrequency */

function frequencyCounter(items) {
  const freqs = {};
  for (let item of items) {
      freqs[item] = freqs[item] + 1 || 1;
  }
  return freqs;
}

function sameFrequency(numA, numB){
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
 * Time Complexity: O(n^2)
 * @param  {...any} args
 * @returns {boolean}
 */
function areThereDuplicates(...args) {
  if (args.length < 2) return false;
  let p1 = 0;
  let p2 = 1;
  let len = args.length-1;

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
  return false
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true