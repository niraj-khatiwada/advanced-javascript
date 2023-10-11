Difference between cluster and worker threads.

- When 2 processes are forked in cluster mode, 2 instances of nodejs processes are created. That means 2 instances of v8, event loop, memory, etc environment.

- While we spawn a new worker thread, it runs on different thread but it does not create another separate instance of node.js.
