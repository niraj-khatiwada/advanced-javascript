;(function () {
  // index signature
  type Map = {
    [_: string]: number
  }

  const map: Map = { name: 200, age: 100 }

  type StrictMap = {
    name: string
    age: number
  }

  const sMap: StrictMap = { name: 'niraj', age: 26 }
  const keys: Array<keyof StrictMap> = ['age', 'name']
  const alsoKeys: Array<keyof typeof sMap> = ['age', 'name'] // Same as above

  const rMap: Record<string, number> = {
    age: 26,
  }
})()
