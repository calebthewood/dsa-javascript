"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
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

  push(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let first = this.first;
      this.first = node;
      node.next = first;
    }
    this.size += 1;
    return this.size;
  }
  pop() {
    let popped = this.first;
    if (!this.first) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = popped.next;
    }
    popped.next = null;
    this.size -= 1;
    return popped.val;
  }
}

let stack = new Stack;
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.print();
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
stack.print();