;(function () {
  type CustomReturnType<T> = T extends (...args: any[]) => infer R ? R : any

  function doingSomething() {
    return 'Hello'
  }

  const doSomething: CustomReturnType<typeof doingSomething> = 'Niraj'

  type GetDataTypeOfFirstArgument<T> = T extends (
    first: infer R,
    ...rest: any[]
  ) => any
    ? R
    : unknown

  // Get data type of first argument of a function
  function tesFn(a: string) {
    return a
  }
  function tesFn2(a: number) {
    return a
  }
  const test: GetDataTypeOfFirstArgument<typeof tesFn> = 'Niraj'
  const tes2: GetDataTypeOfFirstArgument<typeof tesFn2> = 100

  // Data types inside an array

  type TypeOfArrayItems<T> = T extends (infer R)[] ? R : unknown

  const list = ['Niaj', 26]
  const abc: TypeOfArrayItems<typeof list> = 100

  // type Func<T> = T extends () => infer R ? R : unknown

  // const func: Func<() => number>  = 100
})()
