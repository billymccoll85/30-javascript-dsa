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

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(start, finish) {
    const distances = {};
    const previous = {};
    const priorityQueue = new PriorityQueue();
    const visited = new Set();

    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (!priorityQueue.isEmpty()) {
      const { value: current } = priorityQueue.dequeue();

      if (current === finish) {
        const path = [];
        let vertex = finish;
        while (vertex) {
          path.push(vertex);
          vertex = previous[vertex];
        }
        return path.reverse();
      }

      visited.add(current);

      for (const neighbor of this.adjacencyList[current]) {
        if (!visited.has(neighbor.node)) {
          const distance = distances[current] + neighbor.weight;
          if (distance < distances[neighbor.node]) {
            distances[neighbor.node] = distance;
            previous[neighbor.node] = current;
            priorityQueue.enqueue(neighbor.node, distance);
          }
        }
      }
    }

    return null;
  }
}