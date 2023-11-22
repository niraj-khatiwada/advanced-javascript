/* Make sure to enable experimentalDecorators: true to use this legacy implementation of decorators */

// ;(function () {
//   enum Level {
//     Info = 'Info',
//     Warn = 'Warn',
//     Error = 'Error',
//   }

//   // Class Decorator
//   function Log(level: Level) {
//     console.log('Decorator Log')
//     return function (constructor: any) {
//       console.log('Log: ', level)

//       const instance = new constructor('niraj')
//       console.log(instance.getName())
//     }
//   }

//   function Save() {
//     console.log('Decorator Save')
//     return function (_: any) {
//       console.log('Saved: ')
//     }
//   }

//   // Property Decorator
//   function PropertyDecorator() {
//     // This prototype is prototype of instance of the class
//     return function (prototype: any, name: string) {
//       console.log('Property Decorators', prototype, name)
//     }
//   }

//   // Method Decorator
//   function MethodDecorator() {
//     return function (
//       prototype: any,
//       name: string,
//       descriptor: PropertyDescriptor
//     ) {
//       console.log('Method decorator', prototype, name, descriptor)
//     }
//   }

//   // Getter Descriptor(Accessor Descriptor)
//   function AccessorDescriptor() {
//     return function (
//       prototype: any,
//       name: string,
//       descriptor: PropertyDescriptor
//     ) {
//       console.log('Getter decorator', prototype, name, descriptor)
//     }
//   }

//   // Parameter Decorator
//   function ParameterDecorator() {
//     return function (prototype: any, methodName: string, position: number) {
//       console.log('Parameter Decorator', prototype, methodName, position)
//     }
//   }

//   // The actual creation of decorators happen from top to bottom
//   // The invocation of decorators happen from bottom to top
//   @Log(Level.Info)
//   @Save()
//   class Person {
//     @PropertyDecorator()
//     private name: string

//     constructor(name: string) {
//       this.name = name
//     }

//     @MethodDecorator()
//     getName() {
//       return this.name
//     }

//     setName(@ParameterDecorator() newName: string) {
//       this.name = newName
//     }

//     @AccessorDescriptor()
//     get _name() {
//       return this.name
//     }

//     // We don't need to supply decorator here for setter when getter already has it.
//     set _name(newName: string) {
//       this.name = newName
//     }
//   }
// })()
