# Data Structures

## Singly Linked Lists

## **➡ 📦 ➡ 📦 ➡**

A data structure that contains a **head**, a **tail**, and a length property.

Linked lists consist of **nodes**, each node has a **value** and a **pointer** to another node or null.

Linked lists are most similar to arrays, with a few notable differences.

Lists: don’t have indices, nodes are connected with a ‘next’ pointer, and random access is not allowed. Instead you must traverse through the list to the desired node.

Arrays are indexed in order, but insertion and deletion can be expensive operations, however elements can be quickly accessed with an index.

### Big O:

1. Insertion - **O(1)**
2. Removal - **O(1) or O(n)**
3. Searching - **O(n)**
4. Access - **O(n)**

Singly linked lists excel at insertion and deletion, especially at the beginning of a list, but lag behind arrays in regards to random access. Linked lists are the foundation for stacks, queues, trees, and graphs.

**Node Class**

This will form the basic building block for other data structures. Depending on the data structure, a node may have additional properties.

```jsx
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let first = new Node("Hello");
first.next = new Node("friend");
```

**Singly Linked List** **ADT**:

**head O(1)**: Entry point/root of the list

**tail O(1)**: the last node in the list

**length O(1)**: number of nodes in list

**push O(1)**: adds a node to the end of the list

**pop O(1)**: removes the last node of a list

**shift O(1)**: removes the head node in the list

**unshift O(1)**: inserts a new node at the head of a list

**get O(n):** retrieve a node at a given index, not constant like in an array

**set O(n):** set the value of a node at a given index to the given value

**insert O(n):** insert a new node at a given index

**remove O(n):** removes the node at a given index

**reverse O(n):** reverses a linked list in place

```jsx
class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = null;
	}

	push(val) {
		const node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length += 1;
		return this
	}

	pop() {
		if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

	shift() {
    if (!this.head) return undefined;
    let shifted = this.head;
    this.head = shifted.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return shifted;
  }

	unshift(val) {
		let node = new Node(val);
		node.next = this.head;
		this.head = node;
		this.length += 1;
		return this;
	}

	get(index) {
    if (index >= this.length || index < 0) return null;
    if (index === 0) return this.head;
    if (index === this.length-1) return this.tail;

    let current = this.head;
    for (let i = 0; i <= index; i++) {
      current = current.next;
    }
    return current;
  }

	set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

	insert(index, val) {
    if (index > this.length || index < 0) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val)

    let node = new Node(val);
    let previous = this.get(index - 1);
    let current = previous.next
    node.next = current;
    previous.next = node;
    return true;
  }

	remove(index) {
		if (!this.head) return null;
		if (index < 0 || index >= this.length) return null;
		if (index === 0) {
			this.head = this.head.next;
		}
		let previous = this.get(index - 1);
		let next = previous.next.next;
		previous.next = next;

	}

reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this
  }

}
```

<hr>

## Doubly Linked Lists

## **📦 ↔ 📦 ➡ 📦**

Very similar to a singly linked list, but with an extra pointer so that each node points to the next node as well as the previous node. This added feature provides some benefit, but come at a cost of increased memory requirements.

When popping from a doubly linked list, it is essential to to fully sever the node from the list. To do this you simply set the node’s previous property to null. Without this step, the ‘removed’ node can access the tree through its prev property, even once the list’s tail property has been moved to the new tail.

Excels at inserting data, better than singly linked list at removal. Searching can be better, but is technically still linear. They’re basically the same, but the extra pointer does provide some added convenience.

### Big O

1. Insertion - O(1)
2. Removal - O(1)
3. Searching - O(n), technically O(n/2)
4. Access - O(n)

```jsx
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prec = null;
	}
}
```

```jsx
class DoublyLinkedList {
	constructor(val) {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	print() {
    const list = [];

    let current = this.head;
    while (current) {
      list.push(current.val);
      current = current.next;
    }
    console.log(list.join(" "));
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

	pop() {
    if (!this.head) return;
    let popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
    }
    popped.prev = null; // severs node from tree
    this.length -= 1;
    return popped;
  }

  shift() {
    if (!this.head) return;
    let shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.prev = null;
    }
    shifted.next = null;
    this.length -= 1;
    return shifted;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length += 1;
    return this;
  }

	get(index) {
    if (index < 0 || index >= this.length) return null;
    if (!this.head) return;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;

    let current;
    if (index >= Math.floor(this.length / 2)) {
      current = this.tail;
      for (let i = this.length - 1; i !== index; i--) {
        current = current.prev;
      }
    } else {
      current = this.head;
      for (let i = 0; i !== index; i++) {
        current = current.next;
      }
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length += 1;
    return true
  }

}
```

<hr>

## Priority Queue

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities. Priority queues are most often implemented with a max or min binary heap, but they are two distinct **ADTs**.

```jsx
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(){
      this.values = [];
  }
  enqueue(val, priority){
      let newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
  }
  bubbleUp(){
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while(idx > 0){
          let parentIdx = Math.floor((idx - 1)/2);
          let parent = this.values[parentIdx];
          if(element.priority >= parent.priority) break;
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;
      }
  }
  dequeue(){
      const min = this.values[0];
      const end = this.values.pop();
      if(this.values.length > 0){
          this.values[0] = end;
          this.sinkDown();
      }
      return min;
  }
  sinkDown(){
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while(true){
          let leftChildIdx = 2 * idx + 1;
          let rightChildIdx = 2 * idx + 2;
          let leftChild,rightChild;
          let swap = null;

          if(leftChildIdx < length){
              leftChild = this.values[leftChildIdx];
              if(leftChild.priority < element.priority) {
                  swap = leftChildIdx;
              }
          }
          if(rightChildIdx < length){
              rightChild = this.values[rightChildIdx];
              if(
                  (swap === null && rightChild.priority < element.priority) ||
                  (swap !== null && rightChild.priority < leftChild.priority)
              ) {
                 swap = rightChildIdx;
              }
          }
          if(swap === null) break;
          this.values[idx] = this.values[swap];
          this.values[swap] = element;
          idx = swap;
      }
  }
}
```

<hr>

## Stacks & Queues

## Stacks **📦 📦 📦 ↔ 📦**

A LIFO, last in first out, data structure. The last element added will be the first element removed.

Common implementations include JS managing function invocations “the stack”, Undo/Redo functionality, Routing (browser history), is treated like a stack. Some languages come with a stack data type. JavaScript does not, but using an array and only push and pop is one way to imitate a stack.

Stacks prioritize insertion and removal, not optimized for searching or access. Stacks are used to implement **depth first** tree traversal algorithms.

### Big O

1. Insertion - O(1)
2. Removal - O(1)
3. Searching - O(n)
4. Access - O(n)

```jsx
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		let node = new Node(val)
		if (!this.first) {
			this.first = node;
			this.last = node;
		} else {
			first = this.first;
			this.first = node
			node.next = first;
		}
		this.size += 1;
		return this.size;
	}
	pop() {
		let popped = this.first;
		if (!this.first) return null;
		if (this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = popped.next;
		}
		popped.next = null;
		this.size -= 1;
		return this.size;
		}
}
```

## Queues **📦 ➡ 📦 📦 📦 ➡ 📦**

A first in first out, or FIFO, data structure. Common examples include uploading resources, printing, task processing. Like stacks, queues are optimized for insertion and removal. The order between them leads to important differences, but in either case they are not ideal for Searching and Access. Queues are used to implement **breadth first** tree traversal

### Big O

1. Insertion - O(1)
2. Removal - O(1)
3. Searching - O(n)
4. Access - O(n)

```jsx
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let node = new Node(val);
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

  dequeue() {
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
}
```
<hr>

## Trees Basics

Tree’s are non linear data structures. In a tree, nodes only point downward, from parent to child. A tree also has only one entry point/root.

**Root:** The entry point of a tree

**Leaf:** A node with no children

**Child:** Node below another node;

**Parent:**  Node above another node

**Siblings:** Nodes at the same depth from the root

**Edge:** the connection between 2 nodes

**Depth:** Distance from the root

**Height:** Distance from the root to the furthest child node of a tree.

Some common examples of trees include the HTML DOM, JSON, Network routing methods, Abstract syntax tree, artificial intelligence (mini-max/decision trees), and folder structure in OS.

### Binary Search Tree

Special case of binary tree. Each node has no more than 2 children. Left child value is always less than parent’s value, right child’s value is always more than parent node. Badly balanced BST’s are more likely to be in O(n)

### Big O - if tree is balanced

1. Insertion - O(log n)
2. Removal - O(log n)
3. Searching - O(log n)
4. Access - O(log n)

```jsx
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

  insert(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (current) {
				if (val === current.val) return;
        if (val < current.val) {
          if (current.left) {
            current = current.left;
          } else if (!current.left) {
            current.left = node;
						break;
          }
        } else if (val >= current.val) {
          if (current.right) {
            current = current.left;
          } else if (!current.right) {
            current.right = node;
						break;
          }
        }
      }
    }
    return this;
  }

}

let tree = new BinarySearchTree();
tree.root = new Node(10);
```

## Tree Traversal

Tree Traversal here is explained in the context of Binary Search Trees.

In a wide tree, dfs excels over bfs. bfs will store more nodes while dfs will only store one branch at a time. However in a deeply nested, relatively narrow tree, bfs may excel b/c parent nodes are removed from the queue as traversal continues downward.

**Breadth First Search**

Traversing across tree. Visits every sibling node before going to child nodes.

- Uses a queue to store nodes
- Time Complexity O(n)
- Space Complexity

**Depth First Search**

Traverse down through children to leaf node first before branching out. Strategies vary.

- Uses a stack to store nodes, can rely on the call stack to traverse recursively.
- Time Complexity O(n)
- Space Complexity
    -

**In order,** left child added, then value is read, then right child added. An in order function will read a BST from the lowest value to the highest value.

- useful in BST’s because you will get the node values back in order. Not true if a tree is not in order.

```jsx
if (node.left) traverse(node.left);
visited.push(node.val);
if (node.right) traverse(node.right);
```

**Pre-Order,** read value, add left child, then add right child. A pre-order traversal will read a BST starting with the root node, moving down the left most branches before reading right branches, working its way across the tree.

- useful to export the tree b/c it preserves the order of the tree. Could flatten a tree then reconstruct the tree afterwards.

```jsx
visited.push(node.val);
if (node.left) traverse(node.left);
if (node.right) traverse(node.right);
```

**Post-Order,** add left child, add right child, then read current value. A post-order traversal will read a BST from the leaves in, beginning on the left side and ending on the right side.

-

```jsx
if (node.left) traverse(node.left);
if (node.right) traverse(node.right);
visited.push(node.val);
```

<hr>

## Binary Heap

Heaps are trees! and There are many, this section will focus on min and max heaps. Very similar to a BST, but with no specific order regarding left/right order of children. They’re often used to implement priority queues and graph traversals.

**BinaryHeap**

- Each parent has at most 2 child nodes
- No implied order between sibling nodes
- left children filled out first
- left and right must be filled before appending to child

**MaxBinaryHeap**

- Value of parent node is always greater than its child nodes

**MinBinaryHeap**

- Value of parent node is always less than its child node

**Storing Heaps**

Heaps can be represented as an array, if you follow some simple mathematics.

- for any index of an array n…
- Left child is stored at 2n + 1
- Right child is stored at 2n + 2
- Parent located at floor((n - 1) / 2)

**Inserting into a MaxHeap**

add to the end, then largest value will “bubble up”. Insert at end, compare to parent, swapping if larger, repeat.

**Removing from a MaxHeap**

The first step, getting the max value, is easy enough, but remember this is a tree, so we’ll have to reorganize the structure before we can finish removing the max value. We do this my popping off the last value, putting it at the root, then moving it down through the tree, until it is no longer less than either child node.

### Big O

1. Insertion - O(log n)
2. Removal - O(log n)
3. Searching - O(n)

Each time we go down a level in a binary heap, the number of nodes double, but the number of operations only ever increases by 1. Unlike some trees, heaps are always balanced, there is now order among siblings, but all left & right children will be filled before progressing to the next level. Heaps are not optimized for search, they average out to O(n/2) because the element is likely to be easier to find, but not guaranteed.

```jsx
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let child = this.values.length - 1;
    let parent = Math.floor((child - 1) / 2);
    // bubble up!
    while (this.values[child] > this.values[parent]) {
      let childVal = this.values[child];
      this.values[child] = this.values[parent];
      this.values[parent] = childVal;

      child = parent;
      parent = Math.floor((child - 1) / 2);
    }
    return child;
  }

  extractMax() {
    if (!this.values) return;
    let max = this.values[0];
    let element = this.values.pop();
    const len = this.values.length;
    if (len > 0) this.values[0] = element;

    let parent = 0; // set parent & check for valid children
    let childL = (2 * parent) + 1 < len ? (2 * parent) + 1 : -1;
    let childR = (2 * parent) + 2 < len ? (2 * parent) + 2 : -1;
    let child = this.values[childL] >= this.values[childR] ? childL : childR;
    // bubble down!
    while (this.values[parent] < this.values[child]) {
      this.values[parent] = this.values[child];
      this.values[child] = element;

      parent = child; // set parent & check for valid children
      childL = (2 * parent) + 1 < len ? (2 * parent) + 1 : -1;
      childR = (2 * parent) + 2 < len ? (2 * parent) + 2 : -1;
      child = this.values[childL] >= this.values[childR] ? childL : childR;
    }
    return max;
  }

}
```

<hr>

## Hash Tables

Most languages have a built in hash table. In Objects & Maps in JavaScript, Dictionaries in Python, Java, Go, and Scala have Maps, Ruby has Hashes.

- Stores **key: value** pairs
- finds values quickly given a key
- store data in a large array and work by hashing the keys
- Similar to arrays, but keys are not ordered
- they are fast! fast finding values, adding values, and removing values.

Has tables allow us to give values a human readable key describing the value. A hashing function is used to convert human readable keys to valid indices. Real world hashing algorithms are V large, V complicated to provide better encryption, etc.. but the basic premise isn’t so bad.

### Big O

1. Insertion - O(1)
2. Deletion - O(1)
3. Access - O(1)
4. Searching - O(n)

Hash Tables have amazing insert, access, and deletion.

**Hashing Functions**

They are primarily used in hash tables, but also used in JSON web tokens, and many other applications. Not necessarily the same as a cryptographically secure hashing function

What makes a good hash function?

- Deterministic, returns the same index for a given key
    - ex: “myKey” —> “we24r3etrgj” every time
- Gotta be fast! Constant time O(n)
- Doesn’t cluster outputs at specific indices, but distributes uniformly.

An extremely rudimentary hash function, issues at this point are:

1. Only hashes strings
2. Time complexity is not constant time, it is linear
3. Clusters pretty easy, could be more random.

```jsx
function hash(key, arrayLen) {
	let total = 0;
	for (let char of key) {
		// map "a" to 1, "b" to 2, "c" to 3, etc...
		let value = char.charCodeAt(0) - 96;
		total = (total + value) % arrayLen;
	}
	return total;
}
```

**Prime Numbers??**

Prime numbers are helpful in spreading out the keys more uniformly.

Also useful to have an array/table that has a prime length

Why? Because math, if you’re so curious then you should have studied harder in middle school.

```jsx
function hash(key, arrayLen) {
	let total = 0;
let WEIRD_PRIME = 31;
for (let i = 0; i < Math.min(key.length, 100); i++) {
	let char = key[i];
	let value = char.charCodeAt(0) - 96;
	total = (total * WEIRD_PRIME + value) % arrayLen;
	}
	return total
}
```

**Handling Collisions**

- **Separate Chaining**: at each index in our array we store values using a more sophisticated data structure (array or linked list). This allows us to store multiple key-value pairs at the same index. This is the bucket approach, so multiple items may get stored in the same bucket, so you get constant access then a brief linear search through a short list to access an item.
- **Linear Probing:** when a collision occurs, continue moving through the list until the next empty slot. This ensures a single value at each index

```jsx
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    let index = this._hash(key);
    let isDuplicate = false;
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    } // loop checks for duplicate keys
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (key === this.keyMap[index][i][0]) {
        this.keyMap[index][i][1] = val;
        isDuplicate = true;
      }
    } // clunky way to do this, but c'est la vie
    if (!isDuplicate) this.keyMap[index].push([key, val]);
    return index;
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        if (this.keyMap[i].length > 1) {
          for (let j = 0; j < this.keyMap[i].length; j++) {
            if (!keys.includes(this.keyMap[i][j][1])) {
              keys.push(this.keyMap[i][j][0]);
            }
          }
        } else {
          keys.push(this.keyMap[i][0][0]);
        }
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][1])) {
            values.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return values;
  }
}
```

<hr>

## Graphs

A graph data structure consists of a finite set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph. AKA a graph is a set of nodes, each with a list of connections. Graphs don’t necessarily have a root

Graphs come up in the following use cases:

- Social Networks
- Location/Mapping (Google Maps)
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- Trees are linear graphs where for any given node, ther is only one path to another node
- Recommendation Engines (look into how a netflix/amazon recommendation graph works)
- All over the place, the internet could be modeled as a graph…

### Big O

We’re in the big leagues now, table needed!

| Operation | Adjacency List | Adjacency Matrix |
| --- | --- | --- |
| Add Vertex | O(1) | O(|V^2|) |
| Add Edge | O(1) | O(1) |
| Remove Vertex | O(|V| + |E|) | O(|V^2|) |
| Remove Edge | O(|E|) | O(1) |
| Query | O(|V| + |E|) | O(1) |
| Storage | O(|V| + |E|) | O(|V^2|) |

|V| - number of edges, |E| - number of edges

**Terminology**

- **Vertex** - a node
- **Edge** - connection between nodes
- **Height** - distance from another node
- **Weighted** - when a value is assigned to the edge, like a distance, there is a cost to going from one node relative to another
- **Unweighted** - a graph with no weight or value to the edges
- **Directed** - a graph with a direction assigned to its edges. Ex: Twitter: following is a one-way relationship
- **Undirected** - a graph where there is no direction associated with the edges. Ex: friends on facebook are 2 way link
- **Matrix** - basically an array of arrays to store rows and columns of data. There’s mathematical implications as well, but that’s the quick version.
- **Adjacency Matrix** - Can store relationship between nodes in a matrix, basically a rows and columns showing which nodes are connected where. Because you’re forming a table, you must fill empty spaces (where no edge between two nodes exists with something, even a null or 0 value.
    - Takes up more space in sparse graphs
    - Slower to iterate over all edges
    - Faster to lookup a specific edge
    - This super basic example shows the link between 3 vertices. Note that Nodes can not be connected to themselves, but we must store this as 0 or some falsey/null value.

    | - | A | B | C |
    | --- | --- | --- | --- |
    | A | 0 | 1 | 0 |
    | B | 1 | 0 | 1 |
    | C | 0 | 1 | 0 |
- **Adjacency List** - These examples will use an Adjacency List. Can take up less space in a sparse graph. Faster to iterate over all edges. Can be slower to lookup a specific edge
    - Option 1: list of tuples where each tuple is the two connected nodes. This works well for numbers, but may not be enough for other data types

    ```jsx
    let list = [[1,2],[1,3],[2,3],[3,4]];
    ```

    - Option 2: A hashmap/object where the key is a given node, and the value is a list of connected nodes.

    ```jsx
    let nodes = {A:[1,2], B:[2,4], C:[1,4]}
    ```


Real world data is often relatively sparse. Some points may be densely connected. A relatively low ratio of nodes to connections vs how many there could be. For example, it’s possible that everyone you’ve ever met has also met every other person you’ve met, but most likely only a small subset of them have met one another. Potential for connection is high (lots of nodes/people), but connections (edges) are relatively low. Lets say I have 500 FB friends, if I pick any one person, they most likely are only friends with 20 or so of my other friends. And this will cluster such that my closest friends may have 50 mutual connections while my acquaintances may have only 2 or 3.

For now, we’re half-assing the error handling, real implementations would have much more code to prevent duplicates, check for valid values, etc.

```jsx

class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (vertex in this.adjacencyList) return;
		this.adjacencyList[vertex] = [];
	}

	addEdge(v1, v2) {
		if (v1 in this.adjacencyList && v2 in this.adjacencyList) {
			this.adjacencyList[v1].push(v2)
			this.adjacencyList[v2].push(v1)
		}
	}

	removeEdge(v1, v2) {
		if (v1 in this.adjacencyList && v2 in this.adjacencyList) {
			this.adjacencyList[v1] = this.adjacencyList[v1].filter(
				v => v !== v2);
			this.adjacencyList[v2] = this.adjacencyList[v2].filter(
				v => v !== v1);
		}
	}

	removeVertex(vertex) {
		while (this.adjacencyList.length) {
			const adjacentVertex = this.adjacencyList[vertex].pop()
			this.removeEdge(vertex, adjacentVertex)
		}
		delete this.adjacencyList[vertex]
	}

}
```

### Graph Traversal

There’s no guarantee of one unique path. There’s no guaranteed root or starting node. DFS vs BFS is not always as clear to understand as it is in trees. It’s not always clear when your traversing around or away from a node.

**Graph traversal use cases:**

- Peer to peer networking
- Web crawlers: seo, web scrapers
- Finding “closest” matches or recommendations
- Shortest path problems
    - GPS Navigation
    - Solving Mazes
    - AI (shortest path to win the game)

**Depth First Traversal**

Prioritizes visiting children of a node before visiting siblings. Deepens search before widening. in depth first you traverse from neighbor to neighbor with no regard for who’s connected to the previous node.

**Recursive DFS**. In this version we’re doing a recursive approach with a helper function. Personally, I think I prefer either pure recursion or just an iterative approach, but it can be nice and succinct to use recursion instead. There’s a new feature here that I have seen, but never grokked before. It’s related to the concept of currying—or maybe it is currying?—That’s the enclosure of the function in parens, (), followed by the immediate invocation with (vertex). This is essentially the same as having declared the function then on the next line calling dfs(vertex). We’re basically telling JavaScript to define this function and then invoke it immediately. It’s not relevant here, but the parens around the function is how JavaScript devs of yore created closures to protect their functions and plugins from the global scope. You’ll notice that plugins use that approach, that is so that the variable names within the plugin do not interact with the rest of the program.

```jsx
depthFirstSearchRecursive(vertex) {
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null; //base case
      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) dfs(neighbor);
      });
    })(vertex);
    return results;
  }
```

**Iterative DFS** See we use a similar number of lines of code to the recursive approach, but this reads more like a typical function, and we don’t lose our *this* context.

```jsx
depthFirstSearchIterative(start) {
    const stack = [start];
    const results = [];
    const visited = {};
    while (stack.length) {
      let vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        results.push(vertex);
        this.adjacencyList[vertex].forEach(neighbor => {
          if (!visited[neighbor]) stack.push(neighbor);
        });
      }
    }
    return results;
  }
```

**Breadth First Traversal**

Prioritizes visiting all given vertices at a given depth/height before moving down/out to neighbors of neighbors. Like with trees, we’ll use a queue to accomplish this!

```jsx
breadthFirstSearch(start) {
    const queue = [start];
    const results = [];
    const visited = {};
    visited[start] = true;
    let vertex;

    while (queue.length) {
      vertex = queue.shift();
      results.push(vertex);

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return results;
  }
```