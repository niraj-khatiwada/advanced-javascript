const map = new Map()

map.set('name', 'Niraj')
map.set('age', '26')

console.log(map)
console.log(map.get('name'))
console.log(map.size)

map.delete('name')

console.log(Array.from(map.keys()))
console.log(Array.from(map.values()))
