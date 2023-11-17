class User {
  #db
  constructor(db) {
    this.#db = db
  }
  getUser(id) {
    // this.#db.ge
    return { id, name: 'Niraj' }
  }
}

export { User }
