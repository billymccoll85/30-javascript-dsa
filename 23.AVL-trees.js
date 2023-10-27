class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insert(this.root, value);
  }

  _insert(node, value) {
    if (!node) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else {
      node.right = this._insert(node.right, value);
    }

    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

    const balance = this._getBalance(node);

    if (balance > 1 && value < node.left.value) {
      return this._rotateRight(node);
    }

    if (balance < -1 && value > node.right.value) {
      return this._rotateLeft(node);
    }

    if (balance > 1 && value > node.left.value) {
      node.left = this._rotateLeft(node.left);
      return this._rotateRight(node);
    }

    if (balance < -1 && value < node.right.value) {
      node.right = this._rotateRight(node.right);
      return this._rotateLeft(node);
    }

    return node;
  }

  _getHeight(node) {
    return node ? node.height : 0;
  }

  _getBalance(node) {
    return node ? this._getHeight(node.left) - this._getHeight(node.right) : 0;
  }

  _rotateLeft(node) {
    const right = node.right;
    const left = right.left;

    right.left = node;
    node.right = left;

    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    right.height = 1 + Math.max(this._getHeight(right.left), this._getHeight(right.right));

    return right;
  }

  _rotateRight(node) {
    const left = node.left;
    const right = left.right;

    left.right = node;
    node.left = right;

    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    left.height = 1 + Math.max(this._getHeight(left.left), this._getHeight(left.right));

    return left;
  }
}