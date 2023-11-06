import http from 'http'
import crypto from 'crypto'

const db = new Map()
db.set('1', 'Admin')
db.set('2', 'Niraj')

const server = http.createServer(function (req, res) {
  const isAuthenticated = req.headers['cookie']?.includes('SESSION_ID=cookie')
  switch (req.url) {
    case '/login': {
      if (
        req.method?.toUpperCase() === 'POST' &&
        req.headers['content-type'] === 'application/x-www-form-urlencoded'
      ) {
        const user = db.get('2')
        if (user == null) {
          return res.end('user not found')
        }
        res.setHeader(
          'Set-Cookie',
          `SESSION_ID=cookie${crypto.randomUUID()}; HttpOnly;`
        )
        return res.end('<h1>logged in</h1>')
      }
      break
    }
    case '/delete': {
      if (!isAuthenticated) {
        return res.end('not authenticated')
      }
      if (req.method?.toUpperCase() === 'GET') {
        // This CSRF token will be sent to client on Form GET request and it will be stored in Redis session with ttl. If the client csrf and server csrf matches, then the request will be proceeded. If not, halt it. The form should be submitted within certain time otherwise it won't work.
        const csrfToken = crypto.randomUUID()
        return res.end(`
            <!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Document</title>
              </head>
              <body>
                  <h1>Delete your account</h1>
                  <form action="http://localhost:3000/delete" method="POST">
                  <input name="csrf" value="${csrfToken}"></input>
                      <button type="submit">Delete account</input>
                  </form>
              </body>
              </html>
            `)
      }
      if (
        req.method?.toUpperCase() === 'POST' &&
        req.headers['content-type'] === 'application/x-www-form-urlencoded'
      ) {
        let bodyChunk = ''
        let body = {}
        req.on('data', function (chunk) {
          bodyChunk += chunk
        })
        req.on('end', function () {
          const bodyString = Buffer.from(bodyChunk).toString()?.trim()
          if (bodyString.startsWith('csrf=')) {
            body.csrf = bodyString.slice('csrf='.length)
          }

          if (body.csrf == null) {
            return res.end('csrf missing')
          }
          // The above csrf must be verified and matched with earlier csrf attached on GET request of form.
          const user = db.get('2')
          if (!(user == null)) {
            db.set('2', null)
            res.setHeader('Set-Cookie', 'SESSION_ID=; HttpOnly; Max-Age:0;')
            return res.end('deleted')
          }
          return res.end('user not found')
        })
        return
      }
      break
    }
    default: {
      break
    }
  }
  res.statusCode = 200
  return res.end(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>My beautiful website</h1>
        ${isAuthenticated ? '<p>Authenticated</p>' : '<p>Not Authenticated</p>'}
        <form action="http://localhost:3000/login" method="POST">
            <button type="submit">Login</input>
        </form>
    </body>
    </html>
  `)
})

server.listen(3000, function () {
  console.log('Server running at port 3000')
})
