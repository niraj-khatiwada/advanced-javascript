;(function () {
  type User = {
    name: 'Niraj'
    age: 26
  }
  function user(a: number, b: boolean): User {
    return { name: 'Niraj', age: 26 }
  }

  const anotherUser: ReturnType<typeof user> = { name: 'Niraj', age: 26 }

  const p: Parameters<typeof user> = [100, false]
})()
