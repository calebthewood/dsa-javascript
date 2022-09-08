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
    if (index === this.length - 1) return this.tail;

    let current;
    if (index >= Math.floor(this.length / 2)) {
      current = this.tail;
      for (let i = this.length - 1; i !== index; i--) {
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

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let node = this.get(index - 1);
    newNode.prev = node;
    newNode.next = node.next;
    node.next = newNode;

    this.length += 1;
    return true
  }
}


let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.unshift(0);
console.log(list.insert(6, "Hi"));
console.log(list.print());