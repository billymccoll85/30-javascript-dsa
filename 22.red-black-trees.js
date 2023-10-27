class Node {
  constructor(value, color) {
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value, 'red');
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (current) {
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            node.parent = current;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = node;
            node.parent = current;
            break;
          }
          current = current.right;
        }
      }
      this.fixInsert(node);
    }
  }

  fixInsert(node) {
    while (node.parent && node.parent.color === 'red') {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;
        if (uncle && uncle.color === 'red') {
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rotateRight(node.parent.parent);
        }
      } else {
        const uncle = node.parent.parent.left;
        if (uncle && uncle.color === 'red') {
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rotateLeft(node.parent.parent);
        }
      }
    }
    this.root.color = 'black';
  }

  rotateLeft(node) {
    const right = node.right;
    node.right = right.left;
    if (right.left) {
      right.left.parent = node;
    }
    right.parent = node.parent;
    if (!node.parent) {
      this.root = right;
    } else if (node === node.parent.left) {
      node.parent.left = right;
    } else {
      node.parent.right = right;
    }
    right.left = node;
    node.parent = right;
  }

  rotateRight(node) {
    const left = node.left;
    node.left = left.right;
    if (left.right) {
      left.right.parent = node;
    }
    left.parent = node.parent;
    if (!node.parent) {
      this.root = left;
    } else if (node === node.parent.right) {
      node.parent.right = left;
    } else {
      node.parent.left = left;
    }
    left.right = node;
    node.parent = left;
  }
}