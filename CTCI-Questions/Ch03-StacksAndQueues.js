"use strict";

/* ************************************************ Data Structures ********* */

/** Represents a node */
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
  /** @constructor Creates an empty stack */
  constructor() {
    /** @type {Node|null} - The node atop the stack */
    this.top = null;
    /** @type {Node|null} - The bottom node of the stack */
    this.bottom = null;
    /** @type {number} - Height of the stack */
    this.size = 0;
  }
  /** Console.logs teh stack as a string of comma seperated values */
  print() {
    const output = [];
    let current = this.top;
    while (current) {
      output.push(current.val);
      current = current.next;
    }
    let data = output.join(",");
    console.log(data);
    return data;
  }
  /**
   * Pushes a new node with given value onto the stack
   * @param {*} val - a value to be added ontop of the stack
   * @returns {number} - size of the stack
   */
  push(val) {
    let node = new Node(val);
    if (!this.bottom) {
      this.top = node;
      this.bottom = node;
    } else {
      let top = this.top;
      this.top = node;
      node.next = top;
    }
    this.size += 1;
    return this.size;
  }
  /**
   * Removes the top node
   * @returns {*} value of removed node
   */
  pop() {
    if (!this.bottom) return null;
    let popped = this.top;
    if (this.size === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = popped.next;
    }
    popped.next = null;
    this.size--;
    return popped.val;
  }
  /** @returns {*} Returns the top of the stack without modifying it */
  peak() {
    return this.top.val;
  }
  /** @returns {boolean} Returns true if stack is empty, else false */
  isEmpty() {
    return this.size === 0;
  }
}


/** Represents a queue data structure */
class Queue {
  /** @constructor Creates an empty stack */
  constructor() {
    /** @type {Node|null} - The node at the top of the queue */
    this.first = null;
    /** @type {Node|null} - The node at the end of the queue */
    this.last = null;
    /** @type {number} - Size of the queue */
    this.size = 0;
  }
  /** Console.logs and returns the stack as a string of comma seperated values
   * @returns {string} returns node values as a string for evaluation
   */
  print() {
    const output = [];
    let current = this.first;
    while (current) {
      output.push(current.val);
      current = current.next;
    }
    let data = output.join(",");
    console.log(data);
    return data;
  }
  /** Add an item to the end of the queue
   * @param {*} item - item to to be added to the queue in a Node
   * @returns {number} - returns size of queue
   */
  add(item) {
    let node = new Node(item);
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
  /** Remove the first item in the queue
   * @returns {*} - returns value of the node at the top of the queue
   */
  remove() {
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

  /** @returns {*} Returns the top of the Queue without modifying it */
  peak() {
    return this.first.val;
  }

  /** @returns {boolean} Returns true if queue is empty, else false */
  isEmpty() {
    return this.size === 0;
  }
}

/* ************************************************* Algo Solutions ********* */


module.exports = {
  Stack, Queue
};