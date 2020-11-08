// stack

// functions : push, pop, peek, length

let letters = []; // this is our stack

let word = "freecode";

let rword = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

// if (rword === word) {
//   console.log(word + "is a palidrome");
// } else {
//   console.log(word + "is NOT a palidrome");
// }

//create a stack
let Stack = function () {
  this.count = 0;
  this.storage = {};

  // add a value onto the end of the Stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Remove and return the value at the end of stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  // return the count which is the number of items
  this.size = function () {
    return this.count;
  };

  // return the value at the end of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freecodecamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
