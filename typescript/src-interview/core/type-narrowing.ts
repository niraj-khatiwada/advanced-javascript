;(function () {
  // Simple Example: Function
  function length(value: string | number): number {
    if (typeof value === 'string') {
      return value.length
    }

    return value.toString().length
  }

  // Simple Example: Class

  class User {
    name: string
    constructor(name: string) {
      this.name = name
    }
  }
  class Someone {
    age: number
    constructor(age: number) {
      this.age = age
    }
  }
  function isUser(val: User | Someone) {
    if (val instanceof User) {
      console.log(val.name)
    } else {
      console.log(val.age)
    }
  }
  const user = new User('Niraj')
  const someone = new Someone(26)
  console.log(isUser(user))

  function isDate(val: Date | string) {
    if (val instanceof Date) {
      console.log(val.toISOString())
    } else {
      console.log(val.length)
    }
  }

  function doesKeyExists(key: string, obj: User): boolean {
    return key in obj
  }

  console.log(doesKeyExists('name', user))

  function getValueFromObject(key: keyof User, obj: User): string {
    return obj[key]
  }

  console.log(getValueFromObject('name', user))

  // Advanced Example
  type Person = { type: 'person'; name: string }
  type Company = { type: 'company'; founder: string }

  type Entity = Person | Company

  //   function isPerson(entity: Entity): boolean {
  //     return entity.type === 'person'
  //   }
  function isPerson(entity: Entity): entity is Person {
    return entity.type === 'person'
  }

  function doSomething(entity: Entity) {
    const isP = isPerson(entity)
    if (isP) {
      console.log(entity.name)
    } else {
      console.log(entity.founder)
    }
  }
})()
