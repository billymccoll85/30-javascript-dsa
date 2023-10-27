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

  bellmanFord(start) {
    const distances = {};
    const previous = {};

    for (const vertex of this.vertices) {
      distances[vertex] = Infinity;
      previous[vertex] = null;
    }

    distances[start] = 0;

    for (let i = 0; i < this.vertices.length - 1; i++) {
      for (const { vertex1, vertex2, weight } of this.edges) {
        if (distances[vertex1] + weight < distances[vertex2]) {
          distances[vertex2] = distances[vertex1] + weight;
          previous[vertex2] = vertex1;
        }
      }
    }

    for (const { vertex1, vertex2, weight } of this.edges) {
      if (distances[vertex1] + weight < distances[vertex2]) {
        return null;
      }
    }

    return { distances, previous };
  }
}