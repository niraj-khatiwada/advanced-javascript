// @ts-check
import 'dotenv/config'
import mysql from 'mysql2'

const db = mysql.createPool({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
  multipleStatements: true,
})

function query(sql) {
  return new Promise(function (resolve, reject) {
    db.getConnection(function (err, connection) {
      db.query(sql, function (error, results, fields) {
        db.releaseConnection(connection)
        if (!(error == null)) {
          return reject(error)
        } else {
          return resolve(results)
        }
      })
    })
  })
}

// Example of race condition
// Make sure balance is set to 200 and see the result. You might need to run this multiple times.

async function withdrawBalance(amount) {
  try {
    await query(`SET autocommit = 0;`)
    await query(`START TRANSACTION;`)
    const [result] = await query(
      `SELECT * FROM user_balance WHERE id = 1 LIMIT 1 FOR UPDATE;`
    )
    if (amount > result.balance) {
      throw new Error(
        `Cannot withdraw amount(${amount}) greater than current balance(${result.balance}).`
      )
    }
    await query(
      `UPDATE user_balance SET balance = (balance - ${amount}) WHERE user_id = 1;`
    )
    console.log('COMMITTING')
    await query(`COMMIT;`)
    console.log('--Completed--', amount)
  } catch (error) {
    console.log('ROLLING BACK')
    await query(`ROLLBACK;`)
    console.log('---ERROR-', error)
  } finally {
    await query(`SET autocommit = 1;`)
  }
}

Promise.allSettled([withdrawBalance(100), withdrawBalance(150)]).then(() => {
  process.exit(0)
})
