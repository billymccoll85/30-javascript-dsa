// Creating a hash table
class HashTable {
  constructor() {
    this.table = new Array(137);
  }

  // Hash function
  hash(string) {
    let total = 0;

    for (let i = 0; i < string.length; i++) {
      total += string.charCodeAt(i);
    }

    return total % this.table.length;
  }

  // Adding a key-value pair to the hash table
  put(key, value) {
    let pos = this.hash(key);

    if (this.table[pos] === undefined) {
      this.table[pos] = [[key, value]];
    } else {
      let index = -1;

      for (let i = 0; i < this.table[pos].length; i++) {
        if (this.table[pos][i][0] === key) {
          index = i;
          break;
        }
      }

      if (index === -1) {
        this.table[pos].push([key, value]);
      } else {
        this.table[pos][index][1] = value;
      }
    }
  }

  // Retrieving a value from the hash table
  get(key) {
    let pos = this.hash(key);

    if (this.table[pos] === undefined) {
      return undefined;
    }

    for (let i = 0; i < this.table[pos].length; i++) {
      if (this.table[pos][i][0] === key) {
        return this.table[pos][i][1];
      }
    }

    return undefined;
  }

  // Removing a key-value pair from the hash table
  remove(key) {
    let pos = this.hash(key);

    if (this.table[pos] === undefined) {
      return false;
    }

    for (let i = 0; i < this.table[pos].length; i++) {
      if (this.table[pos][i][0] === key) {
        this.table[pos].splice(i, 1);
        return true;
      }
    }

    return false;
  }
}

// Creating a hash table and performing operations on it
let ht = new HashTable();
ht.put('John', 30);
ht.put('Jane', 25);
ht.put('Bob', 40);
console.log(ht.get('John')); // Output: 30
console.log(ht.remove('Jane')); // Output: true
console.log(ht.get('Jane')); // Output: undefined