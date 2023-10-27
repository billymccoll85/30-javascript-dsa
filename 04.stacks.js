// Creating a stack
class Stack {
  constructor() {
    this.items = [];
  }

  // Adding an element to the stack
  push(element) {
    this.items.push(element);
  }

  // Removing an element from the stack
  pop() {
    if (this.items.length === 0) {
      return 'Underflow';
    }

    return this.items.pop();
  }

  // Returning the top element of the stack
  peek() {
    return this.items[this.items.length - 1];
  }

  // Checking if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Returning the size of the stack
  size() {
    return this.items.length;
  }
}

// Creating a stack and performing operations on it
let stack = new Stack();
console.log(stack.isEmpty()); // Output: true
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // Output: 3
console.log(stack.pop()); // Output: 3
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false