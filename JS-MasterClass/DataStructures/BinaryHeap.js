"use strict";

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let child = this.values.length - 1;
    let parent = Math.floor((child - 1) / 2);
    // bubble up!
    while (this.values[child] > this.values[parent]) {
      let childVal = this.values[child];
      this.values[child] = this.values[parent];
      this.values[parent] = childVal;

      child = parent;
      parent = Math.floor((child - 1) / 2);
    }
    return child;
  }

  extractMax() {
    if (!this.values) return;
    let max = this.values[0];
    let element = this.values.pop();
    const len = this.values.length;
    if (len > 0) this.values[0] = element;

    let parent = 0;
    let childL = (2 * parent) + 1 < len ? (2 * parent) + 1 : -1;
    let childR = (2 * parent) + 2 < len ? (2 * parent) + 2 : -1;
    let child = this.values[childL] >= this.values[childR] ? childL : childR;
    // bubble down!
    while (this.values[parent] < this.values[child]) {
      this.values[parent] = this.values[child];
      this.values[child] = element;

      parent = child;
      childL = (2 * parent) + 1 < len ? (2 * parent) + 1 : -1;
      childR = (2 * parent) + 2 < len ? (2 * parent) + 2 : -1;
      child = this.values[childL] >= this.values[childR] ? childL : childR;
    }
    return max;
  }

}

// console.log("P: ", this.values[parent], "LC: ", this.values[childL], "RC: ", this.values[childR]);
let maxHeap = new MaxBinaryHeap();
maxHeap.insert(1);
maxHeap.insert(10);
maxHeap.insert(2);
maxHeap.insert(9);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(8);
maxHeap.insert(100);
maxHeap.insert(98);
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
