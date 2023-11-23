;(function () {
  interface User {
    name: string
    age: number
  }

  interface AFunction {
    (a: number, b: number): number
  }

  const af: AFunction = function (a: number, b: number): number {
    return a + b
  }

  // Extending
  interface Person extends User {
    gender: 'male' | 'female'
  }

  const person: Person = { name: 'Niraj', age: 26, gender: 'male' }
})()
