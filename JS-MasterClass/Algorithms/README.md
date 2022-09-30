# Algorithms

This repo contains implementations of the following categories of algorithms in JavaScript.

[Search Algorithms](https://github.com/calebthewood/dsa-javascript/tree/main/JS-MasterClass/Algorithms#algorithms)

[Naive Sorting Algorithms](https://github.com/calebthewood/dsa-javascript/tree/main/JS-MasterClass/Algorithms#naive-sorting-algorithms)

[Intermediate Sorting Algorithms](https://github.com/calebthewood/dsa-javascript/tree/main/JS-MasterClass/Algorithms#intermediate-sorting-algorithms)

[Dijkstra’s Algorithm](https://github.com/calebthewood/dsa-javascript/tree/main/JS-MasterClass/Algorithms#dijkstras-algorithm)

## Search Algorithms

### Linear Search

JavaScript has the following built-in linear search methods.

- Array.indexOf()
- Array.includes()
- Array.find()
- Array.findIndex()

The general implementation of linear search looks something like,

```jsx
function findThing(thing) {
	for (let element of array) {
		if (element === thing) {
			return "found the thing!"
	}
}
```

### Binary Search

Binary search is an implementation of a Divide and Conquer approach. If data is sorted, you can quickly search data in logorithmic time by cutting the data set in half with each iteration.

```jsx
function binarySearch(sortedArray, item) {
  let min = 0;
  let max = sortedArray.length - 1;

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    let guess = sortedArray[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) { //guessed too high
      max = mid - 1;
    } else if (guess < item) { //guessed too low
      min = mid + 1;
    }
  }
  return -1;
}
```

### Naive String Search

Naive process for finding a substring. Works logically enough, find the first character from the substring, then check subsequent characters. Time complexity is Quadratic, O(n^2).

```jsx
function naiveStringSearch(string, substring) {
  const len = string.length;
  let target = substring.length - 1;
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (string[i] === substring[0]) {
      for (let j = 0; j <= target; j++) {
        if (string[i + j] !== substring[j]) break;
        if (j === target) count += 1;
      }
    }
  }
  return count;
}
```

<hr>

## Naive Sorting Algorithms

Sorting is the process of rearranging the items in a collection to some kind of order: alphabetically, numerically, etc. Most commonly known sorting algos are comparator sorts, meaning elements must be compared. Because of this, the best average runtime complexity for an a comparison algorithm is O (n log n).

### JavaScript’s Array.sort()

By default, sorts by unicode character value. Accepts an optional comparator function to specify sort parameters. The default value can have unexpected results when working with numbers as it will sort by the number’s unicode value rather than the number value. Likewise capital letters are sorted apart from their lowercase counterparts.

```jsx
[3,2,1].sort( (a,b) => a - b) //-> [1,2,3]
["c", "b", "a"].sort() // -> ["a", "b", "c"]
```

### Bubble Sort

A sorting algorithm where the largest values bubble up to the top. Each value is compared to the next value. They are swapped based on the desired order. Process repeats until the entire collection is sorted

**ES5 Swap:**

```jsx
function swap(arr, idx1, idx2) {
	var temp = arr[idx1];
	arr[idex1] = arr[idx2];
	arr[idx2] = temp;
}
```

**ES2015 Swap:**

```jsx
const swap = (arr, idx1, idx2) => {
	[arr[idx1], arr[idx2]] = [arr[idx2], aee[idx1]];
```

Optimized Bubble Sort. To optimize this bubble sort from the most naive version, we start the outer loop from the end of the array. This prevents comparing against undefined at the end of the array. I’ve also added a noSwaps variable to prevent the algorithm from continuing to run once all elements are in order. Iterating from the end prevents us from comparing undefined, and results in fewer operations.

```jsx
function bubbleSort(array) {
  const len = array.length;

  for (let i = len; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j + 1, j);
        console.log("Array:   ", array);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}
```

### Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position. Generally worse than bubble sort. Can excel when writing to disc.

```jsx
function selectionSort(array) {
  const len = array.length;

  for (var i = 0; i < len; i++) {
    let min = i;
    for (var j = i + 1; j < len; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(array, min, i);
    }
  }
  return array;
}
```

### Insertion Sort

Builds up the sort by gradually creating a larger left half which is always sorted. Runtime is quadratic, but good with nearly sorted data and live data

```jsx
function insertionSort(array) {
	const len = array.length;
	for (var i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j+1] = currentVal;
	}
	return arr
}
```

<hr>

# Intermediate Sorting Algorithms

This is where sorting gets real. Most of these run in n log n time, the best general sorting runtime possible.

### mergeSort

Created by Jonathan Van Neuman, written in the 1948. Works by splitting an array into subarrays, sorting the subarrays, then merging the sorted subarrays back together.

Pseudocode:

- Merge Pseudocode
    - Create empty array, look at smallest values in each input array.
    - while there are still values
        - if valeu in 1st inputarray is smaller than value in 2nd, push the value in the first array into results and move to next value in 1st
        - if value in 1st is larger than value in 2nd, push value in second into results and move on to the next value in 2nd array
        - once we exhaust one array, push all remaining values
- mergeSort Pseudocode
    - break array into halves until all arrays are empty or have one element
    - once you have smaller, sorted arrays, merge them back together
    - return 😊

**Merge**

```jsx
function merge(arr1, arr2) {
  const output = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      output.push(arr1[i]);
      i += 1;
    } else {
      output.push(arr2[j]);
      j += 1;
    }
  }
  while (i < arr1.length) {
    output.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    output.push(arr2[j]);
    j++;
  }
  return output;
}
```

**Merge Sort**

```jsx
function mergeSort(array) {
	if (array.length <= 1) return array;
	let mid = Math.floor( array.length / 2);
	let left = mergeSort(array.slice(0, mid));
	let right = mergeSort(array.slice(mid));
	return merge(left, right)
}
```

### Quick Sort

Quick sort works by repeatedly arranging elements in a list such that items larger than a given element are moved to the right of that element and items smaller than that element are moved to the left. The central element in question in a given operation is the pivot point.

Pivot/partition Helper - a helper function to handle the moving of elements during the sorting process. It designates an element as the pivot point, and then moves all larger items to the right and all smaller items to the left. Operates in place. Ideally chooses median value.

The Pivot helper function will return the index

```jsx
function pivot(array, start = 0, end = array.length - 1) {
  let pivot = array[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      swapIndex += 1;
      swap(array, swapIndex, i);
    }
  }
  swap(array, start, swapIndex);
  return swapIndex;
}
```

```jsx
function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    //left
    quickSort(array, left, pivotIndex - 1);
    //right
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}
```

Pivoting is linear,  but the

## Non-Comparison Sorting

### Radix Sort

Radix sort is a special sorting algorithm that works only on lists of numbers. It never compares elements. It exploits that information about the size of a number is encoded in the number of digits. This implementation assumes base 10. Time complexity is O(n * m), and while normally it is quite fast at sorting numbers, working with huge numbers, or a large set of distinct numbers may reduce this advantage.

**Helpers**

Math.abs ensures the function works with negative numbers.

Math.pow lets us isolate the digit we want to target, by raising ten to the power of our “index”

At this point, we have our digit, and the digit to the left. We divide that by 10, and are left with the number at our “index”.

```jsx
function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
```

To find the “length” of a number, we use the following code.

log10, ten to what power gives us num, then round down, then add one.

```jsx
function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}
```

Find the digit with the most digits. Loop through array, and check the digit count at each iteration. This will determine how many times the algorithm needs to run to sort our numbers.

```jsx
function mostDigits(array) {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
}
```

**Radix Sort**

```jsx
function radxSort(array) {
	let largest = mostDigits(array);

	for (let k = 0; k < largest; k++) {
		let digitBuckets = Array.from({ length: 10}, () => []);
		for (let i = 0; i < nums.length; i++) {
			let digit = getDigit(nums[i], k);
			digitBuckets[digit].push(nums[i]);
		}
	nums = [].concat(...digitBuckets);
	}
return nums;
}
```

<hr>

## Dijkstra’s Algorithm

“Dijkstra’s Shortest Path Algorithm”. One of the most famous algorithms out there. It finds the shortest path between two vertices on a graph. Answer’s the question, “What’s the fastest way to get from Point A to Point B?”

Edsger Dijkstra was a Dutch Programmer, physicist, essayist, and general polymath. He contributed immensely to the field of computer science. He came up with the algorithm at a cafe while trying to find the the shortest train from Rotterdam to Groningen in the Netherlands.

**Use Cases:**

- GPS - finding fastest route
- Network Routing - finds open shortest path for data
- Biology - used to model the spread of viruses among humans
- Airline tickets - finding cheapest route to your destination
- And much much more!

To implement Dijkstra’s we’ll need a weighted graph:

```jsx
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({node: v2, weight});
    this.adjacencyList[v2].push({node: v1, weight});
  }
}
```

**Approach.** I’ll also write out the approach for this one, as it will be important to to be able to talk through the algorithm.

1. Each time we choose the next node to visit we take the greedy approach and choose the node with the smallest known distance, and visit that node first.
2. Once we’ve moved to that node we look at it’s adjacency list (neighbors)
3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we’re checking from the starting node.
4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.

To Implement Dijkstra’s we’ll need a priority queue. Below is a simplified priority queue that meets our needs. Notice that we’ll be sorting rather than using a binary heap which limits us to a minimum runtime of O(n log n). I think it’s nice to know that you can whip up a quick naive priority queue like this for toy functions and experiments, but you can also just import the proper priority queue class from a few sections back.

```jsx
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort( (a,b) => a.priority - b.priority);
  };
}
```

I decomposed the initializing of our reference variables out into its own function, because I thought we’d need 3 different loops, but it was possible to set up each one on the same loop. Neat! It cleans things up a bit, but isn’t strictly needed. The most difficult part of writing this for me was keeping the structure of our different objects straight. The concepts aren’t too bad, but you really need a model of each object on hand to be able to quickly write this out.

All of this gives you the shortest distance between two nodes, but supposing you had a robot who would be delivering packages back and forth between nodes, this would be called each time. It might become useful at that point to begin memoizing the distances between nodes…

I won’t get into now, but that seems like the logical next step, to memoize the shortest path between nodes as they’re discovered, so that the algo only needs to run once for a given path.

```jsx
_initializeDijkstraRefs(start) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    for (let vertex in this.adjacencyList) {
      previous[vertex] = null;
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
    }
    return [distances, nodes, previous];
  }

  /* vertex = {val: "A", priority: 5} */
  dijkstrasPath(start, end) {
    const [distances, nodes, previous] = this._initializeDijkstraRefs(start);
    const path = []; //variable to be returned
    let smallest;

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === end) {
        //done, build path to return
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let prospect = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (prospect < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = prospect;
            // updating previous, how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, prospect);
          }
        }
      }
    }
    // Need to add starting value, then reverse for start-end sequence.
    return path.concat(smallest).reverse();
  }
```