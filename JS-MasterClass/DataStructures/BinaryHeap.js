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
    let min = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = min;
    }

    let parent = 0;
    let childL = (2 * parent) + 1;
    let childR = (2 * parent) + 2;
    let child = this.values[childL] > this.values[childR] ? childL : childR;

    // bubble down!
    while (this.values[parent] < this.values[child]) {
      let parentVal = this.values[parent];
      this.values[parent] = this.values[child];
      this.values[child] = parentVal;

      parent = child;
      childL = this.values[(2 * parent) + 1];
      childR = this.values[(2 * parent) + 2];
      child = Math.max(childL, childR);
    }
    return max;
  }

}


let maxHeap = new MaxBinaryHeap();
maxHeap.insert(1);
maxHeap.insert(10);
maxHeap.insert(2);
maxHeap.insert(9);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(8);
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
maxHeap.insert(100);
maxHeap.insert(98);
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
