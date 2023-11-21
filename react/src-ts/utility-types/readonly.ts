;(function () {
  type User = {
    readonly name: string
    age: number
  }

  const user: User = Object.freeze({ name: 'Niraj', age: 26 })
  user.age = 100

  // Makes all entries readonly
  const user1: Readonly<User> = { name: 'Niraj', age: 26 }
  //   user1.age =100
})()
