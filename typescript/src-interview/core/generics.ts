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
})()
