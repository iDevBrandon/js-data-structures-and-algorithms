const Queue = function () {
  this.storage = {};
  this.front = 0;
  this.back = 0;
};

// enqueue method
Queue.prototype.enqueue = function (item) {
  this.storage[this.back++] = item;
};

Queue.prototype.dequeue = function () {
  let dequeuedValue = this.storage[this.front];
  delete this.storage[this.front];
  if (this.front !== this.back) this.front++;
  return dequeuedValue;
};

// size method
Queue.prototype.size = function () {
  return this.back - this.front;
};
