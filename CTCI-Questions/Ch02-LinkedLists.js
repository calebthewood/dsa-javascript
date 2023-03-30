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

/**
 * @class Represents a linked list.
 */
class LinkedList {
  /**
   * @constructor Creates a new linked list with the given value as the first node.
   * @param {*} val - The value to be stored in the first node.
   */
  constructor(node) {
    /**
    * @type {Node}
    * @default null
    */
    this.head = node;
    /**
    * @type {Node}
    * @default null
    */
    this.tail = null;

    /**
    * @type {number}
    * @default 0
    */
    this.length = 0;
  }

  /**
   * Deletes a node from the linked list.
   *
   * @param {Node} node - The node to be deleted.
   * @returns {Node} - The deleted node, or null if the linked list is empty.
   */
  deleteNode(node) {
    if (this.head === null) {
      return null;
    }
    if (node === this.head) {
      this.head = this.head.next;
      if (this.head !== null) {
        this.head.prev = null;
      }
      if (this.tail === node) {
        this.tail = null;
      }
    } else {
      let current = this.head.next;
      while (current !== null) {
        if (node === current) {
          current.prev.next = current.next;
          if (current.next !== null) {
            current.next.prev = current.prev;
          } else {
            this.tail = current.prev;
          }
          current.next = null;
          current.prev = null;
          break;
        }
        current = current.next;
      }
    }
    this.length--;
    return node;
  }

  /** 2.1 Remove Dups
   *  Removes duplicates from an unsorted linked list.
   */
  removeDups() {

  }
}