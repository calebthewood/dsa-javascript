"use strict";
/**
 * Handy swap method to switch two elements. Used throughout.
 */
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}


/* ***************************************** Bubble Sort */
function bubbleSort(array) {
  const len = array.length;

  for (let i = len; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j + 1, j);
        console.log("Array:   ", array);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}

// console.log(bubbleSort([1, 5, 50, 99, 13, 56, 23, 7, 3, 4, 1, 9, 2]));

/* ***************************************** Selection Sort */

/**
 * Time Complexity O(n^2)
 * Space Complexity O(1)
 * @param {[Number]} array
 * @returns
 */
function selectionSort(array) {
  const len = array.length;

  for (var i = 0; i < len; i++) {
    let min = i;
    for (var j = i + 1; j < len; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(array, min, i);
    }
  }
  return array;
}

// console.log(selectionSort([4, 3, 2, 1,6,8,9,10,45,23,11,24,17]));


/* ***************************************** Insertion Sort */

/**
 * Time Complexity O(n^2)
 * Space Complexty O(1)
 * @param {[Number]} array
 * @returns {[Number]}
 */
function insertionSort(array) {
  const len = array.length;
  for (var i = 1; i < len; i++) {
    let currentVal = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
  }
  return array;
}

// console.log(insertionSort([4, 3, 2, 1,6,8,9,10,45,23,11,24,17]));

/* ***************************************** Merge Sort */

/**
 *  * Time Complexity O(n log n)
 * Space Complexity O()
 * @param {[Number]} arr1
 * @param {[Number]} arr2
 * @returns {[Number]} Sorted array.
 */
function merge(arr1, arr2) {
  const output = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      output.push(arr1[i]);
      i += 1;
    } else {
      output.push(arr2[j]);
      j += 1;
    }
  }
  while (i < arr1.length) {
    output.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    output.push(arr2[j]);
    j++;
  }
  return output;
}

/**
 * Time Complexity O(n log n)
 * Space Complexity O()
 * @param {[Number]} array
 * @returns
 */
function mergeSort(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  console.log(left);
  return merge(left, right);
}

// console.log(mergeSort([9, 7, 5, 5, 1, 3, 2, 4, 6, 8]));

/* ***************************************** Quick Sort */

/** */
function pivot(array, start = 0, end = array.length - 1) {
  let pivot = array[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      swapIndex += 1;
      swap(array, swapIndex, i);
    }
  }
  swap(array, start, swapIndex);
  return swapIndex;
}

/**
 * Time Complexity O(n^2)
 *    average can be O(n log n)
 * Space Complexity O()
 * @param {[Number]} array
 * @param {Number} left
 * @param {Number} right
 * @returns
 */
function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);     //left
    quickSort(array, pivotIndex + 1, right);    //right
  }
  return array;
}

// console.log(quickSort([9, 4, 8, 2, 1, 5, 7, 6, 3]));

/* ***************************************** Radix Sort */

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

/**
 * Time Complexity O(n * m)
 * Space Complexity O(n + m)
 * @param {[Number]} nums
 * @returns {[Number]}
 */
function radixSort(nums) {
  let largest = mostDigits(nums);

  for (let k = 0; k < largest; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([100, 9000, 50, 33, 445, 678]));