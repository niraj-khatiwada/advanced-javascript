;(function () {
  type User = {
    readonly name: string
    age: number
  }
  const user: User = {
    name: 'Niraj',
    age: 26,
  }
  //   user.name = 'Suraj'
  console.log(user)

  // Make all entries Readonly

  const user1: Readonly<User> = { name: 'Niraj', age: 26 }
  //   user1.name = "asas"
  //   user1.age = 100

  // Custom ReadOnly helper

  type CustomReadOnly<T> = {
    readonly [K in keyof T]: T[K]
  }

  type Person = {
    name: string
    age: number
  }

  const readOnlyPerson: CustomReadOnly<Person> = { name: 'Niraj', age: 26 }
  // readOnlyPerson.age = 100 // Forbidden
})()
