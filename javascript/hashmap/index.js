const map = new Map()

map.set(1, 'One')
map.set(2, 'Two')

console.log(map.get(1))
console.log(map.size)
console.log(map.has(2))
console.log(map.keys())
map.delete(3)

for (let value of map.keys()) {
  console.log(value)
}
