function aStarSearch(start, goal, heuristic) {
  const frontier = new PriorityQueue();
  const cameFrom = {};
  const costSoFar = {};

  frontier.enqueue(start, 0);
  cameFrom[start] = null;
  costSoFar[start] = 0;

  while (!frontier.isEmpty()) {
    const current = frontier.dequeue();

    if (current === goal) {
      break;
    }

    for (const neighbor of current.neighbors()) {
      const newCost = costSoFar[current] + current.cost(neighbor);
      if (!costSoFar.hasOwnProperty(neighbor) || newCost < costSoFar[neighbor]) {
        costSoFar[neighbor] = newCost;
        const priority = newCost + heuristic(neighbor, goal);
        frontier.enqueue(neighbor, priority);
        cameFrom[neighbor] = current;
      }
    }
  }

  const path = [goal];
  let current = goal;
  while (current !== start) {
    current = cameFrom[current];
    path.unshift(current);
  }

  return path;
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
    return this.values.shift().value;
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }

  addEdge(node, cost) {
    this.edges.push({ node, cost });
  }

  neighbors() {
    return this.edges.map(edge => edge.node);
  }

  cost(neighbor) {
    return this.edges.find(edge => edge.node === neighbor).cost;
  }
}