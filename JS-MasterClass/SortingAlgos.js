"use strict";

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
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

console.log(bubbleSort([1, 5, 50, 99, 13, 56, 23, 7, 3, 4, 1, 9, 2]));