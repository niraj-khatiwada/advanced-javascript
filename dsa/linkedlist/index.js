import { LinkedList } from './LinkedList.js'

const ll = new LinkedList()

ll.addLast(1)
ll.addLast(2)
ll.addLast(3)
ll.addFirst(0)
ll.addFirst(-1)
// ll.removeFirst()
// ll.removeLast()

ll.reverse()

console.log(ll.toArray())
console.log(ll.indexof(4))
