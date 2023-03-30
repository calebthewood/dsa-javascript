/**
 * @class Represents a node in a doubly linked list.
 */
class NodeS {
  /**
   * @constructor Creates a new node with the given value.
   * @param {*} val - The value to be stored in the node.
   */
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class NodeD {
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
class SinglyLinkedList {
  /**
   * @constructor Creates a new linked list with the given value as the first node.
   * @param {*} val - The value to be stored in the first node.
   */
  constructor() {
    /**
    * @type {Node}
    * @default null
    */
    this.head = null;
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
  /** Prints node list values as an array */
  print() {
    const list = [];
    let current = this.head;

    while (current) {
      list.push(current.val);
      current = current.next;
    }
    console.log(list);
  }
  /** Adds node to end of linked list */
  push(val) {
    const node = new NodeS(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  /**
   * Deletes a node from the linked list.
   *
   * @param {Node} node - The node to be deleted.
   * @returns {Node} - The deleted node, or null if the linked list is empty.
   */
  deleteNode(node) {
    if (this.head === null) return null;

    if (node === this.head) {
      this.head = this.head.next;
      if (this.tail === node) {
        this.tail = null;
      }
    } else {
      let current = this.head.next;
      let prev = this.head;
      while (current) {
        if (node === current) {
          prev.next = current.next;
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
    /*
    keep a set as reference,
    if set has node val, delete it
    else add it to set and keep moving
    alts to set?? I think the only alternative would involve vastly higher time complexity
    */
    let prev = this.head;
    let current = this.head.next;
    const nodeVals = new Set([prev.val]);

    while (current) {
      if (nodeVals.has(current.val)) {
        prev.next = current.next;
        current = current.next;
        this.length--;
      } else {
        nodeVals.add(current.val);
        prev = current;
        current = current.next;
      }
    }
    console.log(nodeVals);
    return this;
  }
}

function generateDupLL(n) {
  const list = new SinglyLinkedList();
  for (let i = 1; i <= n; i++) {
    list.push(i);
    list.push(i);
  }
  return list;
}

// const listA = generateDupLL(20);
// // listA.print();
// console.log(listA.length)

module.exports = {
  SinglyLinkedList,
  generateDupLL,
};
