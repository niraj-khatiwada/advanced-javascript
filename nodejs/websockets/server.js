import http from 'http'
import { WebSocketServer } from 'ws'

const server = http.createServer()

server.listen(3000, function () {
  console.log('Server started.')
})

const wss = new WebSocketServer({ noServer: true })

// Upgrade is a special mechanism provided by HTTP that can upgrade to already established connection to a different protocol like ws.
server.on('upgrade', function (req, socket, head) {
  socket.on('error', onSocketUpgradeError)

  // When upgrade connection succeeds, proceed.
  wss.handleUpgrade(req, socket, head, function (ws) {
    socket.removeListener('error', onSocketUpgradeError)
    wss.emit('connection', ws, req)
  })
})

wss.on('connection', function (ws, req) {
  console.log('WSS started')
  ws.on('error', onWsConnectionError)

  ws.on('open', function () {
    console.log('WS connection opened')
  })

  ws.on('message', function (msg, isBinary) {
    console.log('---Message---', msg, isBinary)
    for (let [client] of wss.clients.entries()) {
      if (client.readyState === 1) {
        // client.send(msg, { isBinary })
        client.send(`Hello - ${+new Date()}`, { isBinary: false })
      }
    }
  })

  ws.on('close', function () {
    console.log('WS is closed.')
  })
})

function onSocketUpgradeError(error) {
  console.log('--onSocketUpgradeError--', error)
}

function onWsConnectionError(error) {
  console.log('--onWsConnectionError--', error)
}
