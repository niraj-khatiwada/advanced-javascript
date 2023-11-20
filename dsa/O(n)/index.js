function main(list = []) {
  if (!Array.isArray(list)) {
    throw new Error('list must be an array')
  }

  // Linear Data Structure
  console.log(list[0]) // O(n)

  // O(n)
  for (let i = 0; i < list.length; i++) {
    console.log(i)
  }

  // O(n^2)
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < ljst.length; j++) {
      console.log(i, j)
    }
  }
}

main([1, 2, 3])
