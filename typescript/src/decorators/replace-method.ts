// ;(function () {
//   interface PersonI {
//     name: string
//     formattedName(): string
//   }

//   function NewMethod() {
//     return function (_: any, _2: string, descriptor: PropertyDescriptor) {
//       const newValue = function () {
//         // @ts-ignore
//         return `Changed Formatted: ${this._name}`
//       }
//       return {
//         ...descriptor,
//         value: newValue,
//       }
//     }
//   }

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

//     @NewMethod()
//     formattedName() {
//       return `Formatted: ${this._name}`
//     }
//   }

//   const person = new Person('Niraj')
//   console.log(person.formattedName())
// })()
