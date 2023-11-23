;(function () {
  type User = {
    name: string
    age: number
    gender?: 'male' | 'female'
  }

  const all: Required<User> = { name: 'Niraj', age: 26, gender: 'male' }
  const some: Partial<User> = { name: 'Niraj' }
})()
