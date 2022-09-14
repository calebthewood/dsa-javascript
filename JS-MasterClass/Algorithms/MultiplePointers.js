"use strict";

/** Accepts an array of integers and finds two that sum to 0 */
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

// console.log("sumsZero: ", sumZero([-4, -3, -2, -1, 1, 2, 3, 4, 5]));

function countValues(arr) {
  const len = arr.length;
  let left = 0;
  let right = left + 1;
  let uniqueSum = 0;

  while (left < len) {
    if (arr[left] !== arr[right]) {
      right = left + 1;
      if (right < len && arr[left] !== arr[right]) {
        uniqueSum++;
      }
    } else {
      left++;
    }
  }
  return uniqueSum;
}

function betterCountValues(arr) {
  const len = arr.length;
  if (!len) return 0;

  let i = 0;
  let j = 1;

  while (j < len) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i + 1;
}

function countUniqueValues(arr) {
	const len = arr.length;
  if (!len) return 0;
  let i = 0;
  let j = 1;

  while (j < len) {
    if (arr[i] === arr[j]) {
      j += 1;
    } else {
      i += 1;
      arr[i] = arr[j]
      j += 1;
    }
  }
  return i + 1
}

console.log(countUniqueValues([1,1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4