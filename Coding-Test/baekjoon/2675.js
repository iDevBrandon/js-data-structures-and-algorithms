let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i <= +input[0]; i++) {
  const row = input[i].split("");
  const num = +row[0];

  const text = input[1].split("").map((t) => t.repeat(num).join(""));

  console.log(text);
}
