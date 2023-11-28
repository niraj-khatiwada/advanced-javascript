import crypto from 'crypto'

// console.log(crypto.getHashes())

const hash = crypto
  .createHash('sha256')
  .update('mysupersecretpassword')
  .digest('hex')

console.log(hash)
