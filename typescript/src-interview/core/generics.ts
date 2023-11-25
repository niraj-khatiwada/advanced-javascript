;(function () {
  function addIdEntry<T extends object>(obj: T): T & { id: string } {
    return { id: '100', ...obj }
  }

  const obj = { user: 'niraj' }
  const abc = addIdEntry(obj)
  console.log(abc)

  /* -- */

  type StatusString<T extends string> = {
    status: T
  }

  const statusUnion: StatusString<'anything'> = { status: 'anything' }

  type Status<T extends 'active' | 'deleted'> = {
    status: T
  }

  const status: Status<'active'> = { status: 'active' }

  /* Advanced */
  type Append = <T>(el: T) => (list: readonly T[]) => T[]

  const append: Append = function <T>(el: T): (list: readonly T[]) => T[] {
    return function (list: readonly T[]) {
      return [...list, el]
    }
  }

  const list = ['Hello']
  console.log(append('World')(list))

  // Return data type of first element of an array
  type First<T extends any[]> = T extends [] ? unknown : T[0]
  // OR
  // type First<T extends any[]> = T["length"] extends 0 ? unknown : T[0]

  type list2 = [1, 2]
  type list3 = ['A', 'B']

  const dataTypeOfFirstElement: First<list2> = 1
  const dataTypeOfFirstElement2: First<list3> = 'A'

  // Find length of array type
  type Length<T extends any[]> = T['length']

  type list4 = [1, 2, 3]

  const length1: Length<list4> = 3
})()
