// ;(function () {
//   interface PersonI {
//     name: string
//     formattedName(): string
//   }

//   function NewInstance() {
//     return function <T extends { new (...args: any[]): PersonI }>(
//       parentConstructor: T
//     ) {
//       return class extends parentConstructor {
//         constructor(...args: any[]) {
//           super(...args)
//         }

//         formattedName() {
//           return `Changed Formatted: ${this.name}`
//         }
//       }
//     }
//   }

//   @NewInstance()
//   class Person implements PersonI {
//     private _name: string

//     constructor(name: string) {
//       this._name = name
//     }

//     get name() {
//       return this._name
//     }

//     set name(newName: string) {
//       this._name = newName
//     }

//     formattedName() {
//       return `Formatted: ${this._name}`
//     }
//   }

//   const person = new Person('Niraj')
//   console.log(person.formattedName())
// })()
