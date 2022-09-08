"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    const list = [];

    let current = this.head;
    while (current) {
      list.push(current.val);
      current = current.next;
    }
    console.log(list.join(" "));
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return;
    let popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
    }
    popped.prev = null; // severs node from tree
    this.length -= 1;
    return popped;
  }

  shift() {
    if (!this.head) return;
    let shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.prev = null;
    }
    shifted.next = null;
    this.length -= 1;
    return shifted;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (!this.head) return;
    if (index === 0) return this.head;
    if (index === this.length-1) return this.tail;

    let mid = Math.floor(this.length / 2);
    let current;

    if (index >= mid) {
      current = this.tail;
      for (let i = this.length-1; i !== index; i--) {
        current = current.prev;
      }
    } else {
      current = this.head;
      for (let i = 0; i !== index; i++) {
        current = current.next;
      }
    }
    return current;
  }
}


let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.unshift(0)
console.log(list.length);
console.log(list.print());
console.log(list.get(4));