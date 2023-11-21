const lists = ['Michael Scott', 'Dwight Schrute', 'Andy Bernard'] as const

const newList = lists.map((item) => {
  return item
})

newList[0] = 'Andy Bernard' // This won't autocomplete if as const is not used
