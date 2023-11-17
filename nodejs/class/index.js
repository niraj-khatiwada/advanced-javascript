class Users {
  #users = []

  addUser(username) {
    this.#users.push(username)
  }
}

export { Users }
