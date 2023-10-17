class Credential {
  constructor(User) {
    this.User = User
  }
  getUserCredential(email) {
    // queries database using email and grabs user detail
    const credential = { userId: 1 }
    const user = new User()
    const userData = user.getData(credential.userId)
    return { ...{ email }, ...userData }
  }
}

export default Credential
