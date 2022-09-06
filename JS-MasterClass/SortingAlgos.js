"use strict";

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

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

/* ********************************** Merge Sort */

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

/** */
function pivot(array, start = 0, end = array.length + 1) {
  let pivot = array[start];
  let swapIndex = start;

  for (let i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapIndex += 1;
      swap(array, swapIndex, i);
      console.log(array);
    }
    swap(array, start, swapIndex);
  }
  return swapIndex;
}

console.log(pivot([9,4,8,2,1,5,7,6,3]));