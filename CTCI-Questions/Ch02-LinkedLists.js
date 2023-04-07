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
    * @type {NodeS}
    * @default null
    */
    this.head = null;
    /**
    * @type {NodeS}
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

  /** Adds node to end of linked list
   * Time Complexity: O(1) Space Complexity: O(1)
   *
   * @param {number|string} val - a value to be held by new node
   * @returns {this} the linked list
   */
  push(val) {
    const node = new NodeS(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  /**
   * Deletes a node from the linked list
   * Time Complexity: O(n) Space Complexity: O(1)
   *
   * @param {Node} node - The node to be deleted
   * @returns {Node} - The deleted node, or null if the linked list is empty
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
   *  Removes duplicates from an unsorted linked list
   *  Time Complexity: O(n) Space Complexity: O(n)
   *  @returns {SinglyLinkedList} returns list
   */
  removeDups() {
    /* keep a set as reference,
    if set has node val, delete it
    else add it to set and keep moving
    alts to set?? I think the only alternative would involve vastly higher time complexity */
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
   * @param {number} distance from end of list
   * @return {NodeS} NodeS - returns NodeS
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
   * @param {Node} node A node to be removed
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

    let rightHead = new NodeS();
    let right = rightHead;
    let leftHead = new NodeS();
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
    right.next = null;
    left.next = rightHead.next;
    this.head = leftHead.next;
    this.tail = right;
  }

  /** 2.5 Sum Lists
   * Accepts two linked lists where the values contained by each node represent a digit of a number.
   *  @param {SinglyLinkedList} listA 3 -> 5 -> 1 == 153
   *  @param {SinglyLinkedList} listB 2 -> 3 -> 9 == 932
   *  @returns {SinglyLinkedList} - summed list. 5 -> 8 -> 0 -> 1
   *  153 + 932 = 1085
   */
  sumList(listA, listB) {
    // Approach #1: pointers for A&B, sum vals and create node for c, return c at the end
    // Approach #2: could get vals from each ll, combine, sum them, split, and create a new ll

    let nodeA = listA.head;
    let nodeB = listB.head;
    let sum = nodeA.val + nodeB.val;
    let digit = sum > 9 ? 9 : sum;
    let carry = sum > 9 ? 1 : 0;
    this.push(digit);
    let current = this.head;
    nodeA = nodeA.next;
    nodeB = nodeB.next;

    while (nodeA && nodeB) {
      sum = nodeA.val + nodeB.val + carry;
      digit = sum > 9 ? sum - 10 : sum;
      carry = sum > 9 ? 1 : 0;
      this.push(digit);
      current = current.next;
      nodeA = nodeA.next;
      nodeB = nodeB.next;
    }

    while (nodeA) {
      sum = nodeA.val + carry;
      digit = sum > 9 ? sum - 10 : sum;
      carry = sum > 9 ? 1 : 0;
      this.push(nodeA.val);
      current = current.next;
      nodeA = nodeA.next;
    }

    while (nodeB) {
      sum = nodeB.val + carry;
      digit = sum > 9 ? sum - 10 : sum;
      carry = sum > 9 ? 1 : 0;
      this.push(nodeB.val);
      current = current.next;
      nodeB = nodeB.next;
    }

    if (carry) {
      this.push(carry);
      current = current.next;
    }
    return this;
  }

  /** 2.5 Pt 2. Sum Lists Reversed
   *  @param {SinglyLinkedList} listA 1 -> 5 -> 3 == 153
   *  @param {SinglyLinkedList} listB 9 -> 3 -> 2 == 932
   *  @returns {SinglyLinkedList} summed list. 1 -> 0 -> 8 -> 5
   */
  reverseSumLists(listA, listB) {
    let nodeA = listA.head;
    let nodeB = listB.head;
    let numA = "";
    let numB = "";

    while (nodeA) {
      numA += String(nodeA.val);
      nodeA = nodeA.next;
    }

    while (nodeB) {
      numB += String(nodeB.val);
      nodeB = nodeB.next;
    }

    let sum = String(Number(numA) + Number(numB)).split("");
    this.push(sum.shift());

    while (sum.length) {
      this.push(sum.shift());
    }
    return this;
  }

  /** 2.6 Palindrome
   * @returns {boolean} true if list is a palindrome, else false
   */
  isPalindrome() {
    const stack = [];
    let current = this.head;
    const len = this.length / 2;
    while (stack.length < this.length / 2) {
      stack.push(current.val);
      current = current.next;
    }

    if (this.length % 2 !== 0) stack.pop();

    while (stack.length) {
      if (current.val !== stack.pop()) {
        return false;
      }
      current = current.next;
    }
    return true;
  }

  /** 2.7 Intersection
   * Determines whether two singly linked lists intersect and if so, returns the intersection as a list.
   * @param {listA} - first list
   * @param {listB} - second list
   * @returns {NodeS|null} returns intersecting node or null
  */
  intersection(listA, listB) {
    /* Approaches
    1) brute - compare each node of listA, with check node of ListB
    2) misses the point? - Add nodes to set, should go up by 2, if goes up by 1, we found intersection
    3) check tails, if same node, then check lens, if even go len/2, if not go to longlen - short len */
    if (listA.tail !== listB.tail) return null;
    let nodeA = listA.head;
    let nodeB = listB.head;

    if (listA.length < listB.length) {
      for (let i = 0; i < listB.length - listA.length; i++) {
        nodeB = nodeB.next;
      }
    }
    if (listB.length < listA.length) {
      for (let i = 0; i < listA.length - listB.length; i++) {
        nodeA = nodeA.next;
      }
    }

    while (nodeA !== nodeB) {
      nodeA = nodeA.next;
      nodeB = nodeB.next;
    }
    return nodeA;
  }
}

/** Generates an singly linked list based on given parameter
 * @param {number|string} n height of the linked list
 * @param {string} params dictates node values
 * @returns {SinglyLinkedList}
 *   "none" - ordered from 1 to n
 *
 *   "duplicate" - two of each num from 1 to n
 *
 *   "random" - simulates random, by alternating btwn high and low values (needs rename)
 */
function generateLL(n = 10, params = "none", k = 0) {
  const list = new SinglyLinkedList();

  if (typeof n === 'number') {
    for (let i = 1; i <= n; i++) {
      if (params === "none") {
        list.push(i);
      }
      if (params === "duplicate") {
        list.push(i);
        list.push(i);
      }
      if (params === "random") {
        list.push(i % 2 === 0 ? i : i * 11);
      }
    }
  } else if (n === 'palindrome') {
    for (let char of params) {
      list.push(char);
    }
  }
  return list;
}

/**
 *
 * @param {number} lenA
 * @param {number} lenB
 * @param {number} meetAt
 * @returns two intersecting lists
 */
function generateIntersectionLists(lenA, lenB, meetAt) {
  const listA = new SinglyLinkedList();
  const listB = new SinglyLinkedList();
  listB.push(0);
  for (let i = 1; i < meetAt; i++) {
    listA.push(i);
    listB.push(i * 11);
  }

  listA.tail.next = listB.tail;
  listA.length++;

  while (meetAt < lenB) {
    listB.push(meetAt);
    listA.length++;
    meetAt++;
  }
  listA.tail = listB.tail;
  return [listA, listB];
}

module.exports = {
  SinglyLinkedList,
  generateLL,
  generateIntersectionLists
};
