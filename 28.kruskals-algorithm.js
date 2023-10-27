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

  kruskal() {
    const minimumSpanningTree = [];
    const disjointSet = new DisjointSet(this.vertices);

    this.edges.sort((a, b) => a.weight - b.weight);

    for (const { vertex1, vertex2, weight } of this.edges) {
      if (disjointSet.find(vertex1) !== disjointSet.find(vertex2)) {
        minimumSpanningTree.push({ vertex1, vertex2, weight });
        disjointSet.union(vertex1, vertex2);
      }
    }

    return minimumSpanningTree;
  }
}

class DisjointSet {
  constructor(elements) {
    this.parent = {};
    for (const element of elements) {
      this.parent[element] = element;
    }
  }

  find(element) {
    if (this.parent[element] === element) {
      return element;
    }
    return this.find(this.parent[element]);
  }

  union(element1, element2) {
    const root1 = this.find(element1);
    const root2 = this.find(element2);
    this.parent[root1] = root2;
  }
}