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

/* 3.1 Three in One
  Use a single array to implement 3 stacks
  1. Split Array into 3, keep track of where each starts and ends
  2. Make adjustable, expand arrays to use more space as they grow
  3. Hints say think about it as if it's wrapping around...?
 */

/** 3.2 Stack Min
 * Design a stack that tracks the minimum element.
 * 1. Add a property on the class to track the current min
 *  - when pushing/popping we check & update this.min,
 * 2. add a property on the node that tracks current min
 *  - give each node an additional value that represents the minimum value below that point
 *
 * fn is pseudo code, expresses core of answer, but wouldn't run on its own.
 */
function stackMin(val) {
  const stack = new Stack();
  let new_min, current_min;

  if (stack.isEmpty()) {
    new_min = val;
  } else {
    current_min = stack.peak()[1]
    new_min = Math.min(val, current_min)
  }
  stack.push([val, new_min])
}

/** 3.3 Set of Plates
 * implement a set of 3 stacks that function as a single stack,
 * shifting values as needed.
 * 1. would be simple to do with 3 arrays, and a few if statements.
 *    Store them in an array to solve followup q.
 *
 * push()
 *  if stackA.len < x && StackB.len == 0, push to a
 *  else if stackB.len && StackC.len == 0 < x, push to b
 *  else if stackC.len < x, push to c
 *
 * pop()
 *  if stackC, pop from c
 *  else if stackB, pop from b
 *  else if stackA, pop from a
 */



module.exports = {
  Stack, Queue
};