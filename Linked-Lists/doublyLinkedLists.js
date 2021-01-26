// link to previous node.
// Doubly linked lists allow us to traverse our list backwards. This

// pro. searching through be more efficient  O(n/2)
// con. hold more memory

function reverse() {
  if (!this.head.next) {
    return this.head;
  }
  let first = this.head;
  let second = first.next;
  while (second) {
    const temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }
}
