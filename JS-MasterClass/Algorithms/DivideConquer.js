"use strict";

/*
Divide and Conquer Algos
- start by dividing problem into smaller problems
- useful in searching, binary searching especially
*/

/**
 * O(log(n))
 */
function binarySearch(array, val) {

  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    console.log("hit")
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}


console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,14,50,90,99,100,1000], 1000))