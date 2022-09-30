"use strict";

const log = console.log;
/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // if root node is null, tree is empty, return 0
    if (!this.root) return 0;

    const toVisitStack = [this.root];
    // sum accumulator
    let sum = 0;

    // while there are descendant nodes in stack, run loop
    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      sum += current.val;

      // if a node has children, push them to stack
      if (current.children.length > 0) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = 0;
    const toVisitStack = [this.root];

    while (toVisitStack.length > 0) {
      let current = toVisitStack.pop();

      if (current.val % 2 === 0) count++;

      if (current.children.length > 0) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = 0;
    const toVisitStack = [this.root];

    while (toVisitStack.length > 0) {
      let current = toVisitStack.pop();

      if (current.val > lowerBound) {
        count++;
      }
      if (current.children.length > 0) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }
    }
    return count;
  }

}

module.exports = { Tree, TreeNode };
