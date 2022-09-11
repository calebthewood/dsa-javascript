"use strict";
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  printDFS() {
    let stack = [this.root];
    let values = [];
    let current = stack.pop();
    while (current) {
      values.push(current.val);
      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
      current = stack.pop();
    }
    console.log(values.join(" "));
  }

  insert(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (current) {
      if (val === current.val) return;
      if (val < current.val) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) return null;
    let current = this.root;

    while (current) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else if (val === current.val) {
        return current;
      }
    }
    return null;
  }

  contains(val) {
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else if (val === current.val) {
        return true;
      }
    }
    return false;
  }

  breadthFirstSearch() {
    const visited = [];
    const queue = [this.root];
    let current = queue.pop();
    while (current) {
      if (current.left) queue.unshift(current.left);
      if (current.right) queue.unshift(current.right);
      visited.push(current.val);
      current = queue.pop();
    }
    return visited.join(" ");
  }

  dfsPreOrder() {
    const visited = [];
    let current = this.root;

    function traverse(node) {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return visited.join(" ");
  }

  dfsInOrder() {
    const visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return visited.join(" ");
  }

  dfsPostOrder() {
    const visited = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left); // same effect as 1-line 'if' statement
      node.right && traverse(node.right);
      visited.push(node.val);
    }

    traverse(current);
    return visited.join(" ");
  }

}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.insert(8).insert(11).insert(3).insert(15).insert(1).insert(50).insert(9).insert(13);
console.log(tree.dfsPostOrder());