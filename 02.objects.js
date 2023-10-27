// Creating an object
let person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Accessing properties in an object
console.log(person.name); // Output: John
console.log(person.age); // Output: 30

// Adding properties to an object
person.gender = 'Male';
console.log(person); // Output: { name: 'John', age: 30, city: 'New York', gender: 'Male' }

// Removing properties from an object
delete person.city;
console.log(person); // Output: { name: 'John', age: 30, gender: 'Male' }