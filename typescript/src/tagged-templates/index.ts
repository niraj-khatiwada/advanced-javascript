function getUsers(query: TemplateStringsArray, userId: number) {
  console.log(query)
  return `SELECT * FROM user WHERE id = ${userId}`
}

console.log(getUsers`HELLO ${100} WORLD`)
