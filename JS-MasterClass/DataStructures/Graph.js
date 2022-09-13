"use strict";

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
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
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
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstSearchRecursive(start) {
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null; // base case
      visited[vertex] = true;
      results.push(vertex);

      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) dfs(neighbor); // recurse case
      });
    })(start);
    return results;
  }

  depthFirstSearchIterative(start) {
    const stack = [start];
    const results = [];
    const visited = {};
    let vertex;

    while (stack.length) {
      vertex = stack.pop();
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

}

let g = new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addVertex("Los Angeles");
// g.addVertex("Hong Kong")
// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");
// g.addEdge("Hong Kong", "Tokyo");
// g.addEdge("Hong Kong", "Dallas");
// g.addEdge("Los Angeles", "Hong Kong");
// g.addEdge("Los Angeles", "Aspen");
// console.log(g)
// g.removeEdge("Dallas", "Tokyo")
// console.log(g)

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// console.log(g.depthFirstSearchRecursive("A"));
// console.log(g.depthFirstSearchIterative("A"));
console.log(g.breadthFirstSearch("A"));