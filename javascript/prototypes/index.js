/**
 * String, Number, Array, etc inherits from the prototype of an base Object. This is called prototypal inheritance.
 */

const obj = {
  name: 'Niraj',
}

const obj2 = Object.create(obj) // Creates  new object but inherits the prototype of parent object
console.log(obj.__proto__ === obj2.__proto__.__proto__)

console.log(obj.__proto__)

// Function is an object in Javascript
function sum() {}

// Everything is an Object in JavaScript
console.dir(sum.__proto__) // Prototype of function
console.dir(sum.__proto__.__proto__) // Prototype of base object of a function
console.log(obj.__proto__) // prototype of an object
console.log('Niraj'.__proto__) // prototype of a String
console.log('Niraj'.__proto__.__proto__) // Base object
console.log((1).__proto__) // prototype of a Number
console.log((1).__proto__.__proto__) // Base Object

// Array is an object in JavaScript
const array = []

console.log(array.__proto__) // Array
console.log(array.__proto__.__proto__)
console.log(obj.__proto__)

const string = ''

console.log(string.__proto__) // String
console.log(string.__proto__.__proto__) // Base Object

const number = 100

console.log(number.__proto__) // Number
console.log(number.__proto__.__proto__) // Base Object

// The `class` we have in JavaScript is not an actual class. It is a syntactic sugar of a prototypal inheritance
