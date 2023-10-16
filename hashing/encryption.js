import crypto from 'crypto'

// 1 byte = 8 bits
// 1 byte = 2 hex character
// Initialization Vector
const iv = crypto.randomBytes(16)
const secretKey = crypto
  .createHash('sha256')
  .update('SUPER SECRET KEY')
  .digest('hex') // 256 bits = 32 bytes -> 32 bytes = 64 hex character
console.log(secretKey)

const ENCRYPTION_ALGORITHM = 'aes-256-gcm'

// Encryption

const cipher = crypto.createCipheriv(
  ENCRYPTION_ALGORITHM,
  Buffer.from(secretKey, 'hex'), // secret key in hex
  iv
)

let encryptedText = cipher.update('Niraj Khatiwada', 'utf-8', 'hex')
encryptedText += cipher.final()

const authTag = cipher.getAuthTag().toString('hex')

const payload = iv.toString('hex') + encryptedText + authTag

console.log('Encrypted', payload)
//25bcfbe79829186a442ef90c3fd2e61b345e6b8e5257c509b607059f20c9a5ba26b8e98f5f9814c4a564e45ddbcbfb

// Decryption

const ivFromPayload = payload.slice(0, iv.length * 2)
const authTagFromPayload = payload.slice(-secretKey.length)
const encryptedPayload = payload.slice(iv.length * 2, -secretKey.length)

const decipher = crypto.createDecipheriv(
  ENCRYPTION_ALGORITHM,
  Buffer.from(secretKey).toString('hex'),
  Buffer.from(iv).toString('hex')
)
