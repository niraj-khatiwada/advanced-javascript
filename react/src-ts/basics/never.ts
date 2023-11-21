type Never1 = string & number
type Never2 = string & boolean

function throwsError(): never {
  throw new Error('Message')
}
