import crypto from 'crypto'

// Supported hash algorithms
console.log(crypto.getHashes())

// SHA = Secure Hash Algorithm
console.log(crypto.createHash('sha256').update('a123457').digest('hex'))
