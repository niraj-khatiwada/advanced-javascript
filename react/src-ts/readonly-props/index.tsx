import React from 'react'

// Will only work for objects
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K]
}

enum Gender {
  Male = 'Male',
  Female = 'Female',
}
interface Props {
  name: string
  age: number
  isMale?: Gender
}

const defaultProps: Partial<Props> = {
  isMale: Gender.Male,
}

// TS has built in utility type Readonly that supports every type.
function ReadOnlyPropsComponent(props: ReadOnly<Props>) {
  props = Object.freeze({ ...defaultProps, ...props })
  // props.age = 100 // -> Throws Error
  console.log(props)
  return <div>ReadOnlyPropsComponent</div>
}

export default ReadOnlyPropsComponent
