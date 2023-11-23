;(function () {
  // Void
  function something(): void {
    console.log('Doing something')
  }

  // Unknown
  let abc: unknown
  if (typeof abc === 'string' || Array.isArray(abc)) {
    abc.length
  }

  // Never
  let cde: string & boolean
  function efg(): never {
    throw new Error('Oops')
  }
})()
