import crypto from 'crypto'

// Initialization Vector
const IV_BYTE_LENGTH = 16
const IV = crypto.randomBytes(IV_BYTE_LENGTH) // 32 hex character
const SECRET_KEY = crypto
  .createHash('sha256')
  .update('My super secret key')
  .digest('hex') // 256 bits -> 32 bytes ->  64 hex characters

const ENCRYPTION_ALGORITHM = 'aes-256-gcm'

function encrypt(text) {
  const cipher = crypto.createCipheriv(
    ENCRYPTION_ALGORITHM,
    Buffer.from(SECRET_KEY, 'hex'),
    IV
  )
  let encryptedText = cipher.update(text, 'utf8', 'hex')
  encryptedText += cipher.final('hex')

  const iv = IV.toString('hex')
  const authTag = cipher.getAuthTag().toString('hex')

  const payload = iv + encryptedText + authTag
  return Buffer.from(payload, 'hex').toString('base64')
}

function decrypt(hash) {
  const payload = Buffer.from(hash, 'base64').toString('hex')

  let iv = payload.slice(0, IV_BYTE_LENGTH * 2)
  let encryptedText = payload.slice(IV_BYTE_LENGTH * 2, -32)
  let authTag = payload.slice(-32)

  let decipher = crypto.createDecipheriv(
    ENCRYPTION_ALGORITHM,
    Buffer.from(SECRET_KEY, 'hex'),
    Buffer.from(iv, 'hex')
  )
  decipher.setAuthTag(Buffer.from(authTag, 'hex'))
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

const e = encrypt('Niraj')
console.log('Encrypted', e)
console.log('Decrypted', decrypt(e))
