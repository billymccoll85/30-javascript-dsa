// Creating a queue
class Queue {
  constructor() {
    this.items = [];
  }

  // Adding an element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Removing an element from the queue
  dequeue() {
    if (this.items.length === 0) {
      return 'Underflow';
    }

    return this.items.shift();
  }

  // Returning the front element of the queue
  front() {
    if (this.items.length === 0) {
      return 'No elements in Queue';
    }

    return this.items[0];
  }

  // Checking if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Returning the size of the queue
  size() {
    return this.items.length;
  }
}

// Creating a queue and performing operations on it
let queue = new Queue();
console.log(queue.isEmpty()); // Output: true
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front()); // Output: 1
console.log(queue.dequeue()); // Output: 1
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false