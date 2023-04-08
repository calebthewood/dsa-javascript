"use strict";

class Node {
  constructor(val) {
    /** @type {*} - Value held by a node */
    this.val = val;
    /** @type {Node|null} - Points to the next node or null */
    this.next = null;
  }
}

/** Represents a stack data structure. */
class Stack {
   /** @constructor Creates a new node with the given value. */
  constructor() {
    /** @type {Node|null} - The node atop the stack*/
    this.first = null;
    /** @type {Node|null} - The bottom node of the stack*/
    this.last = null;
    /** @type {number} - Height of the stack*/
    this.size = 0;
  }
  /** Console.logs teh stack as a string of ", " seperated values */
  print() {
    const output = [];
    let current = this.first;
    while (current) {
      output.push(current.val);
      current = current.next;
    }
    console.log(output.join(", "));
  }
  /**
   * Pushes a new node with given value onto the stack
   * @param {*} val - a value to be added ontop of the stack
   * @returns {number} - size of the stack
   */
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
  /**
   * Removes the top node
   * @returns {*} value of removed node
   */
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