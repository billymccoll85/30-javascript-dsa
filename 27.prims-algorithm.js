class Graph {
  constructor() {
    this.vertices = [];
    this.edges = [];
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
  }

  addEdge(vertex1, vertex2, weight) {
    this.edges.push({ vertex1, vertex2, weight });
  }

  prim(start) {
    const visited = new Set();
    const edges = new PriorityQueue();
    const minimumSpanningTree = [];

    visited.add(start);

    for (const { vertex1, vertex2, weight } of this.edges) {
      if (vertex1 === start) {
        edges.enqueue({ vertex1, vertex2, weight }, weight);
      } else if (vertex2 === start) {
        edges.enqueue({ vertex1, vertex2, weight }, weight);
      }
    }

    while (!edges.isEmpty()) {
      const { value: { vertex1, vertex2, weight } } = edges.dequeue();

      if (visited.has(vertex1) && visited.has(vertex2)) {
        continue;
      }

      minimumSpanningTree.push({ vertex1, vertex2, weight });

      if (!visited.has(vertex1)) {
        visited.add(vertex1);
        for (const { vertex1: v1, vertex2: v2, weight: w } of this.edges) {
          if (v1 === vertex1 && !visited.has(v2)) {
            edges.enqueue({ vertex1: v1, vertex2: v2, weight: w }, w);
          } else if (v2 === vertex1 && !visited.has(v1)) {
            edges.enqueue({ vertex1: v1, vertex2: v2, weight: w }, w);
          }
        }
      }

      if (!visited.has(vertex2)) {
        visited.add(vertex2);
        for (const { vertex1: v1, vertex2: v2, weight: w } of this.edges) {
          if (v1 === vertex2 && !visited.has(v2)) {
            edges.enqueue({ vertex1: v1, vertex2: v2, weight: w }, w);
          } else if (v2 === vertex2 && !visited.has(v1)) {
            edges.enqueue({ vertex1: v1, vertex2: v2, weight: w }, w);
          }
        }
      }
    }

    return minimumSpanningTree;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return this.values.length === 0;
  }
}