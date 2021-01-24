// single linked list
// the start of linked list is head (data, next)

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
}

const myLinkedList = new LinkedList(10);
