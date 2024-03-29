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
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    prevNode.next = newNode, newNode.prev = prevNode;
    newNode.next = nextNode, nextNode.prev = newNode;

    this.length += 1;
    return true
  }

  remove(index) {
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length-1) return this.pop();

    let node = this.get(index);
    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode
    nextNode.prev = prevNode;

    node.prev = null, node.next = null; //sever node from list
    this.length -= 1;
    return node;
  }

  reverse() {
    if (!this.head) return;
    if (this.length === 1) return this;

    let len = this.length;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    while (len > 0) {
      len -= 1;

      let temp = node.next;
      node.next = node.prev;
      node.prev = temp;
      node = node.prev;
    }
    this.head.prev = null;
    this.tail.next = null;
    return this;
  }

}

let list = new DoublyLinkedList();
list.push(0).push(1).push(2).push(3).push(4);

list.print();
console.log(list.reverse());
list.print();

