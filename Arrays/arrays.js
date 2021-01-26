const strings = ["a", "b", "c", "d"];
// 32 bit system, we have 1,2,3,4 shelf
// 4*4 = 16 bypes of stroage

strings[2]; // const

// push - add element in the end of array
strings.push("e");

console.log(strings); // O(1)

// pop - remove element in the end of array
strings.pop();
strings.pop(); // O(1)

// unshift - put the first
strings.unshift("x"); // O(n), we're looping over the array to put the element in the first place

// splice - put the element in the middle
strings.splice(2, 0, "alien"); // O(n/2) -> remove constanst and simplify O(n)

console.log(strings);
