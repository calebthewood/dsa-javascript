/**
 * @class Represents a node in a doubly linked list.
 */
class Node {
  /**
   * @constructor Creates a new node with the given value.
   * @param {*} val - The value to be stored in the node.
   */
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  deleteNode() {

  }
}