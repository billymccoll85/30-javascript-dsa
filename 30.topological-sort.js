class Graph {
  constructor() {
    this.vertices = new Set();
    this.edges = new Map();
  }

  addVertex(vertex) {
    this.vertices.add(vertex);
    this.edges.set(vertex, new Set());
  }

  addEdge(vertex1, vertex2) {
    this.edges.get(vertex1).add(vertex2);
  }

  topologicalSort() {
    const inDegree = new Map();
    for (const vertex of this.vertices) {
      inDegree.set(vertex, 0);
    }
    for (const [vertex, neighbors] of this.edges) {
      for (const neighbor of neighbors) {
        inDegree.set(neighbor, inDegree.get(neighbor) + 1);
      }
    }

    const queue = [];
    for (const [vertex, degree] of inDegree) {
      if (degree === 0) {
        queue.push(vertex);
      }
    }

    const result = [];
    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);
      for (const neighbor of this.edges.get(vertex)) {
        inDegree.set(neighbor, inDegree.get(neighbor) - 1);
        if (inDegree.get(neighbor) === 0) {
          queue.push(neighbor);
        }
      }
    }

    if (result.length !== this.vertices.size) {
      throw new Error('Graph contains a cycle');
    }

    return result;
  }
}