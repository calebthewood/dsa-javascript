"use strict";

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

  dijkstraShortestPath(start, end) {
    const distances = {};
    for (let )
  }
}

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

let graph = new WeightedGraph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "F", 1)
graph.addEdge("D", "E", 3)
graph.addEdge("E", "F", 1)
graph.addEdge("E", "B", 3)

console.log(graph)