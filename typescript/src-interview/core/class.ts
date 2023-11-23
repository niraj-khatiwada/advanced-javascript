;(function () {
  // Class can use both interface and type alias

  type User = {
    name: string
    age: number
    getName: () => string
  }
  //   interface User {
  //     name: string
  //     age: number
  //     getName(): string
  //   }

  class _User implements User {
    name: string = 'Niraj'
    age: number = 26

    getName(): string {
      return this.name
    }
  }
})()
