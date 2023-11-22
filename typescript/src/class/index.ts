;(function () {
  interface PersonI {
    name: string
    formattedName(): string
  }

  class Person implements PersonI {
    private _name: string

    constructor(name: string) {
      this._name = name
    }

    get name() {
      return this._name
    }

    set name(newName: string) {
      this._name = newName
    }

    formattedName() {
      return `Formatted: ${this._name}`
    }
  }

  class CEO extends Person {
    constructor(name: string) {
      super(name)
    }
  }

  const ceo = new CEO('Sam Altman')
  console.log(ceo.formattedName())
})()
