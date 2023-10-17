import worker from './worker.js'

class Queue {
  #queue = new Set()

  addSendEmailQueue(userId) {
    this.#queue.add(userId)
    try {
      worker.emit('email', userId)
      this.#queue.delete(userId)
    } catch (error) {}

    console.log(this.#queue.size)
  }
}

export default Queue
