import crypto from 'crypto'

console.log(crypto.getHashes())

const name = 'Niraj'

const hash = crypto.createHash('sha256')

console.log(hash.update(name).digest('base64url'))
