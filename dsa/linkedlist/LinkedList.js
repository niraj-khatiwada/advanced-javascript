class Node {
  value = null
  next = null

  constructor(value) {
    this.value = value
  }
}

export class LinkedList {
  #head = null
  #tail = null

  // O(1)
  addFirst(value) {
    const node = new Node(value)

    if (this.#head == null) {
      this.#head = this.#tail = node
    }
    if (this.#head == this.#tail) {
      this.#tail = this.#head
      this.#tail.next = null
    }
    node.next = this.#head
    this.#head = node
  }

  // O(1)
  addLast(value) {
    const node = new Node(value)

    if (this.#head == null) {
      this.#head = this.#tail = node
    }

    if (this.#head == this.#tail) {
      this.#tail = node
      this.#head.next = this.#tail
      return
    }

    this.#tail.next = node
    this.#tail = node
  }

  // O(n)
  indexof(value) {
    let index = -1

    if (this.#head == null) {
      return index
    }

    let current = this.#head

    while (current != null) {
      index++
      if (current.value == value) {
        return index
      }
      current = current.next
    }
    return -1
  }

  // O(1)
  removeFirst() {
    if (this.#head == null) {
      return
    }
    if (this.#head == this.#tail) {
      this.#head = this.#tail = null
      return
    }

    this.#head = this.#head.next
  }

  // O(n)
  removeLast() {
    if (this.#head == null) {
      return
    }
    if (this.#head == this.#tail) {
      this.#head = this.#tail = null
      return
    }

    let current = this.#head

    while (current.next != this.#tail) {
      current = current.next
    }

    this.#tail = current
    this.#tail.next = null
  }

  // O(n)
  reverse() {
    if (this.#head == null || this.#head == this.#tail) {
      return
    }

    let head = this.#head
    let previous = this.#head
    let current = this.#head.next

    while (current != null) {
      let ref = current.next
      current.next = previous
      previous = current
      current = ref
    }

    this.#head = this.#tail
    this.#tail = head
    this.#tail.next = null
  }

  toArray() {
    const array = []

    if (this.#head == null) {
      return array
    }

    let current = this.#head

    while (current != null) {
      array.push(current.value)
      current = current.next
    }

    return array
  }
}
