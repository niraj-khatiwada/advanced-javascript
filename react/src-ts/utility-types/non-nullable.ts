;(function () {
  type CanIncludeNullOrUndefined = 'Niraj' | 26 | null | undefined

  type NoNullOrUndefined = NonNullable<CanIncludeNullOrUndefined>
  const a: NoNullOrUndefined = 'Niraj'
})()
