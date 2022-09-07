"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  print() {
    const values = [];
    let current = this.head;
    while (current.next) {
      values.push(current.val);
      current = current.next;
    }
    return values.join("");
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let shifted = this.head;
    this.head = shifted.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return shifted;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;
    return this;
  }
}

let list = new SingleLinkedList();
list.push("hello");
list.push(" ");
list.push("world");
list.push("!");
console.log(list.print());
list.unshift("well ");
console.log(list.print());
