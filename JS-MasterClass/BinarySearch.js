"use strict";

/**
 * I'm being overly verbose, in my if statements, but sometimes
 * I like being excessively explicit.
 * Time Complexity O(log n) yay!
 * Space Complextiy O(1);
 * @param {[Number]} sortedArray
 * @param {Number} item
 * @returns {Number} Number
 */
function binarySearch(sortedArray, item) {
  let min = 0;
  let max = sortedArray.length - 1;

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    let guess = sortedArray[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) { //guessed too high
      max = mid - 1;
    } else if (guess < item) { //guessed too low
      min = mid + 1;
    }
  }
  return -1;
}

function terseBinarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return aer[middle] === elem ? middle : -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10)); // 2
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95)); // 16
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100)); // -1

/* ***************************************** Naive String Search */

function naiveStringSearch(string, substring) {
  const len = string.length;
  let target = substring.length - 1;
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (string[i] === substring[0]) {
      for (let j = 0; j <= target; j++) {
        if (string[i + j] !== substring[j]) break;
        if (j === target) count += 1;
      }
    }
  }
  return count;
}

console.log(naiveStringSearch("lol cat lolz", "cat"));
console.log(naiveStringSearch("lol cat lolz", "lol"));
console.log(naiveStringSearch("lol cat lolz", "hello"));
console.log(naiveStringSearch("lol cat lolz", " "));