class LinkedList {
  constructor() {
      this.head = null;
  }

  // Adding a node to the end of the linked list
  addNode(data) {
      let newNode = { data: data, next: null };

      if (this.head === null) {
          this.head = newNode;
      } else {
          let current = this.head;
          while (current.next !== null) {
              current = current.next;
          }
          current.next = newNode;
      }
  }

  // Removing a node from the linked list
  removeNode(data) {
      if (this.head === null) {
          return;
      }

      if (this.head.data === data) {
          this.head = this.head.next;
          return;
      }

      let current = this.head;
      while (current.next !== null) {
          if (current.next.data === data) {
              current.next = current.next.next;
              return;
          }
          current = current.next;
      }
  }
}

// Creating a linked list and adding nodes to it
let ll = new LinkedList();
ll.addNode(1);
ll.addNode(2);
ll.addNode(3);
console.log(ll);  // Output: { head: { data: 1, next: { data: 2, next: { data: 3, next: null } } } }

// Removing a node from the linked list
ll.removeNode(2);
console.log(ll);  // Output: { head: { data: 1, next: { data: 3, next: null } } }
