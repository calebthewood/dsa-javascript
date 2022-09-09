"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  print() {
    const values = [];
    let current = this.head;
    while (current) {
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

  get(index) {
    if (index >= this.length || index < 0) return null;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;

    let current = this.head;
    for (let i = 0; i <= index; i++) {
      current = current.next;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index > this.length || index < 0) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let node = new Node(val);
    let previous = this.get(index - 1);
    let current = previous.next;
    node.next = current;
    previous.next = node;
    return true;
  }

  remove(index) {
    if (!this.head) return null; // empty list
    if (index < 0 || index >= this.length) return false; //invalid index
    if (index === 0) return this.shift(); // remove head
    if (index === this.length - 1) return this.pop(); //remove tail

    let previous = this.get(index - 1);
    let removed = previous.next;
    previous.next = removed.next;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this
  }

}

let list = new SinglyLinkedList();
list.push("hello");
list.push(" ");
list.push("world");
list.push("!");
list.unshift("well ");
list.set(1, " $@#$ ");
console.log(list.print());
list.reverse();
console.log(list.print());

