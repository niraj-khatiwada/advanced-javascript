import { User } from './User.js'

const db = function () {}

const user = new User(db)

console.log(user.getUser(1))
