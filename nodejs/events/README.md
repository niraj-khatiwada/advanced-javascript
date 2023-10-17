Difference between event emitter and pub/sub?

Event emitted between child processes are not resolved. They will only be resolved when they are in the same processes or parent-child processes.
While pub/subs like Redis can be used in any kind of processes independent f Node server.

Event emitter are used for smaller resource management.
Pub/Sub are designed to handle larger amount of loads.

Web Sockets also use EventEmitters to emit ws connection events like
on("upgrade")
on("open")
on("close")
on("error")
