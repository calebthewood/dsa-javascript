"use strict";
let log = console.log;

/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  /** add array of new Node instances and adds to them to nodes property. */
  addVertices(vertexArray) {
    vertexArray.forEach(vertex => this.nodes.add(vertex));
  }

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** remove edge between vertices v1,v2 */
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** remove vertex from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */
  removeVertex(vertex) {
    if (vertex.adjacent.size > 0) {
      const adjacencies = vertex.adjacent;
      adjacencies.forEach(v => v.adjacent.delete(vertex));
    }
    this.nodes.delete(vertex);
  }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start) {
    const toVisitStack = [start];
    const seen = new Set(toVisitStack);
    const vertices = [];

    while (toVisitStack.length > 0) {
      let currentVertex = toVisitStack.pop();

      vertices.push(currentVertex.value);

      for (let adjacentV of currentVertex.adjacent) {
        if (!seen.has(adjacentV)) {
          toVisitStack.push(adjacentV);
          seen.add(adjacentV);
        }
      }

    }
    return vertices;
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {
    const toVisitStack = [start];
    const seen = new Set(toVisitStack);
    const vertices = [];

    while (toVisitStack.length > 0) {
      let currentVertex = toVisitStack.shift();

      vertices.push(currentVertex.value);

      for (let adjacentV of currentVertex.adjacent) {
        if (!seen.has(adjacentV)) {
          toVisitStack.push(adjacentV);
          seen.add(adjacentV);
        }
      }
    }
    return vertices;
  }

  /** find the distance of the shortest path from the start vertex to the end vertex */
  //Note: had to reference solution to solve this one, need review.
  distanceOfShortestPath(start, end) {
    let queue = [[start, 0]];
    let seen = new Set();

    while (queue.length > 0) {
      let [currVertex, distance] = queue.shift();

      if (currVertex === end) return distance;

      for (let adjacentVertex of currVertex.adjacent) {
        if (!seen.has(adjacentVertex)) {
          seen.add(adjacentVertex);
          queue.push([adjacentVertex, distance + 1]);
        }
      }
    }
  }

  /** Recursive: find the distance of the shortest path from the start vertex to the end vertex */
  // recursiveShortestPath(v1, v2, seen = new Set([v1])) {
  // }
}

module.exports = { Graph, Node };
