let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const newArr = [];

input.forEach((x) => {
  const num = x % 42;

  if (newArr.indexOf(num) === -1) {
    newArr.push(num);
  }
});

console.log(newArr.length);
