HTTP:

- Unidirectional
- HTTP protocol is stateless: A server does not need to know which state the client is in, and the same holds true for the client.
- HTTP is much easier to scale horizontally
- REST uses HTTP to enable client-server communication entire time.

Websocket:

- Bidirectional
- Websocket protocol is stateful: The ws server need to know state between client and server for communication.
- WS are difficult to scale horizontally. Usually, they are scaled vertically.
- WebSocket uses HTTP only during the initial request/response handshake (connection establishment).
