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
  constructor(val = 0) {
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
  toString() {
    const list = [];
    let current = this.head;

    while (current) {
      list.push(current.val);
      current = current.next;
    }
    return list.join(",");
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
    return this;
  }

  /** 2.2  Return Kth to Last
   * Returns the kth node from the end of the list.
   * QUESTION: is the last item 1st from end or 0 from end??
   */
  findFromEnd(k) {
    /*
    Few Approaches here:
    1) with this.length, simply count down until we're at the correct node and return it
    2) Add nodes to array as we go, once we get to the end then return element len - k
    3) crappy, traverse to end to find len, then traverse again up to len - k
    4) Recursion, recurse to end, then back up until we're at k. Probs should do for practice.
    5) I guess there's a multiple pointers approach to be used here as well.
    Will assume I can use a recorded length/height and reference that, effect is the same, but simpler to code
    */
    // start at head,
    // set counter = this.length - k
    // traverse while counter > 0;
    // return current
    if (!this.head) return null;
    let current = this.head;
    let counter = this.length - k - 1;

    while (counter > 0 && current) {
      current = current.next;
      counter--;
    }
    return current;
  }

  /** 2.3 Delete Middle Node
   * Deletes a given node from the middle of a linked list.
   * @param {Node} - A node to be removed
   */
  deleteMiddleNode(node) {
    /* I believe the only way to do this is to bring the value
    of each node forward, then delete the tail */
    let current = node;

    while (current.next !== this.tail) {
      current.val = current.next.val;
      current = current.next;
    }
    current.val = current.next.val;
    this.tail = current;
    current.next = null;
    this.length--;
  }

  /** 2.4 Partition
   * Partition linked list nodes around a value, x such that all nodes < x
   * come before all nodes >= x.
   * @param {number} x A value to partition the list on
   */
  partition(x) {
    /* Opt 1: traverse ll, pop & cache all nodes >= x, add them at the end
      * Opt 2: grab first val < x, store left head, attach all lesser vals to it,
      *        grab first val >= x, store right head, do same, at end, point left to right head
    */

    let rightHead = new Node();
    let right = rightHead;
    let leftHead = new Node();
    let left = leftHead;
    let current = this.head;

    while (current) {
      if (current.val >= x) {
        right.next = current;
        right = right.next;
      } else {
        left.next = current;
        left = left.next;
      }
      current = current.next;
    }
    left.next = rightHead.next;
    this.head = leftHead.next;
    this.tail = right
    return this.toString()
  }
}

/** Generates a singly linked list up to n nodes in height  */
function generateLL(n, params = "none") {
  const list = new SinglyLinkedList();
  for (let i = 1; i <= n; i++) {
    list.push(i);
    if (params === "duplicate") {
      list.push(i);
    }
  }
  return list;
}

module.exports = {
  SinglyLinkedList,
  generateLL,
};
