/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. O(1) */

  push(val) {
    const node = new Node(val);
    // 1st node in list?
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      // 2nd node in list?
    } else if (this.length === 1) {
      this.head.next = node;
      this.tail = node;
      // more than 1 nodes in list?
    } else if (this.length > 1) {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. O(1) */

  unshift(val) {
    const node = new Node(val);

    if (this.length < 1) {
      this.head = node;
      this.tail = node;
    } else if (this.length > 0) {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    const popped = this.tail.val;
    // O(1)
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return popped;
      // O(1)
    } else if (this.length === 2) {
      this.tail = this.head;
      this.head.next = null;
      this.length--;
      return popped;
      // O(n)
    } else {
      let current = this.head;
      while (current !== null) {
        if (current.next === this.tail) {
          current.next = null;
          this.tail = current;
          this.length--;
          return popped;
        }
        current.next = current;
      }
    }
  }

  /** shift(): return & remove first item. O(1)*/

  shift() {
    const current = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;

    } else {
      this.head = current.next;
      current.next = null;
    }
    this.length--;
    return current.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // O(1): find at head or tail.
    if (idx === 0) return this.head.val;
    if (idx === this.length - 1) return this.tail.val;

    // O(n): traverse to find
    let count = 0;
    let current = this.head;
    while (current !== null) {
      if (count === idx) {
        return current.val;
      } else {
        current = current.next;
        count++;
      }
    }
  }

  /** setAt(idx, val): set val at idx to val */
  //note, cannot O(1) set at tail w/o doubly LL
  setAt(idx, val) {
    const node = new Node(val);
    // O(1): set at head
    if (idx === 0) {
      node.next = this.head;
      this.head = node;
      return;

      // O(n): traverse to set
    } else {
      let count = 1;
      let current = this.head;

      while (current !== null) {
        if (count === idx) {
          node.next = current.next;
          current.next = node;
          return;
        } else {
          current = current.next;
          count++;
        }
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
  //   const node = new Node(val);

  //   if (this.length < 1 && idx === 0) {
  //     this.head = node;
  //     this.tail = node;
  //     this.length++;
  //     return;
  //   }
  //   // O(1): set at head
  //   if (idx === 0) {
  //     node.next = this.head;
  //     this.head = node;
  //     this.length++;
  //     return;

  //     // O(n): traverse to set
  //   } else {
  //     let count = 1;
  //     let current = this.head;

  //     while (current !== null) {
  //       if ( )
  //       if (count === idx) {
  //         node.next = current.next;
  //         current.next = node;
  //         this.length++;
  //         return;
  //       } else {
  //         current = current.next;
  //         count++;
  //       }
  //     }
  //   }
  // }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
