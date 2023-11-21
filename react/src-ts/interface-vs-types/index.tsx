// Types can use primitive types where as interface can't
type A = string | number

const a: A = 'Niraj'
console.log(a)

// Both types and interface support function
type F = () => void
interface FI {
  (): void
}

const ff: F = () => {}
const ffi: FI = () => {}

// Interface can extend from another type of interface whereas types cannot

type B = { a: string; b: number }

interface C extends B {}

const abc: C = { a: 'ABC', b: 100 }

console.log(abc)

// Interface allows declaration merging whereas type alias do not
interface M {
  name: string
}
interface M {
  age: number
}
const me: M = { name: 'Niraj', age: 26 }

// Tuples

type Tuple = [number, number]
interface TupleI extends Array<number> {
  0: number
  1: number
}

const tuple: Tuple = [1, 2]
const tupleI: TupleI = [1, 2, 3] // See here, it does not allow types other than number but still allows 3 elements
console.log(tuple, tupleI)
