"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  print() {
    const output = [];
    let current = this.first;
    while (current) {
      output.push(current.val);
      current = current.next;
    }
    console.log(output.join(" "));
  }

  enqueue(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size += 1;
    return this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let dequeued = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = dequeued.next;
    }
    dequeued.next = null;
    this.size -= 1;
    return dequeued.val;
  }

  peak() {
    return this.first.val;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.print();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.print();