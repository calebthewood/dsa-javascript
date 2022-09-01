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

console.log(selectionSort([4, 3, 2, 1,6,8,9,10,45,23,11,24,17]));