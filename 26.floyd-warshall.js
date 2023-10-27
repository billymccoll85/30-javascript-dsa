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

  floydWarshall() {
    const distances = {};

    for (const vertex1 of this.vertices) {
      distances[vertex1] = {};
      for (const vertex2 of this.vertices) {
        distances[vertex1][vertex2] = Infinity;
      }
      distances[vertex1][vertex1] = 0;
    }

    for (const { vertex1, vertex2, weight } of this.edges) {
      distances[vertex1][vertex2] = weight;
    }

    for (const k of this.vertices) {
      for (const i of this.vertices) {
        for (const j of this.vertices) {
          if (distances[i][j] > distances[i][k] + distances[k][j]) {
            distances[i][j] = distances[i][k] + distances[k][j];
          }
        }
      }
    }

    return distances;
  }
}