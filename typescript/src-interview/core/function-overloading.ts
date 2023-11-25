;(function () {
  function getLength(a: any[]): number
  function getLength(a: string): number
  function getLength(a: string | any[]): number {
    return a.length
  }

  console.log(getLength('Niraj'))

  // function getListOrLists(a: string[]): string[]
  // function getListOrLists(a: string): string
  // function getListOrLists(a: string | string[]): string | string[] {
  //   if (typeof a === 'string') {
  //     return `Hello ${a}`
  //   }
  //   return a.map((item) => `Hello ${item}`)
  // }

  function getListOrLists(a: string[]): string[]
  function getListOrLists(a: string): string
  function getListOrLists(a: unknown): unknown {
    if (typeof a === 'string') {
      return `Hello ${a}`
    }
    if (Array.isArray(a)) {
      return a.map((item) => `Hello ${item}`)
    }
    throw new Error()
  }

  getListOrLists('Niraj')
})()
