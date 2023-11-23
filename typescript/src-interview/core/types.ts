;(function () {
  type User = {
    name: string
    age: number
  }

  // Intersecting
  type Person = User & {
    gender: 'male' | 'female'
  }

  const person: Person = { name: 'Niraj', age: 26, gender: 'male' }
})()
