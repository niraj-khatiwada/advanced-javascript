;(function () {
  enum Status {
    Active,
    Deleted,
  }

  type ABC = 'ACTIVE' | 'DELETED'

  const abc: ABC = 'ACTIVE'

  type User = { name: string } | { age: number }

  const user: User = { name: 'Niraj' }
})()
