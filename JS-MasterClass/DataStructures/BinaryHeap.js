"use strict";

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let child = this.values.length-1;
    let parent = Math.floor((child-1)/2)

    while (this.values[child] > this.values[parent]) {
      let childVal = this.values[child];
      this.values[child] = this.values[parent]
      this.values[parent] = childVal;

      child = parent;
      parent = Math.floor((child-1)/2)
    }
    return child;
  }

}

let maxHeap = new MaxBinaryHeap();
console.log(maxHeap.insert(1));
console.log(maxHeap.insert(3));
console.log(maxHeap.insert(5));
console.log(maxHeap.insert(7));
console.log(maxHeap.insert(4));
console.log(maxHeap.insert(2));
console.log(maxHeap.insert(100));
console.log(maxHeap.values)