function existsInString(stringValue, search) {
  return stringValue.indexOf(search) !== -1;
}

console.log(existsInString("red", "r"));
console.log(existsInString("red", "b"));

let str = "he's my king from this day until his last day";
let count = 0;
let pos = str.indexOf("a");
console.log(pos);
while (pos !== -1) {
  count++;
  pos = str.indexOf("a", pos + 1);
}

let test1 = "chicken, noddle, soup, broth";
test1.split(",");

"Wizard of Oz".replace("Wizard", "Witch");

let str = "JavaScript DataStructures";
let n = str.search(/DataStructures/);
console.log(n);

// 5 common RegExp
// 1. /\d+/ , letters including number /d : find all numbers
let reg = /\d+/;
reg.test("123"); // true

// 2. /^\d+$/, only numbers
let reg = /^\d+$/;
reg.test(123); // true

// 3. /^[0-9]*.[0-9]*[1-9]+$/ floating-point
let reg = /^[0-9]*.[0-9]*[1-9]+$/;
reg.test("12.2"); // true

// 4. /[a-zA-Z0-9]/, only number and alphat
let reg = /[a-zA-Z0-9]/;
reg.test("hello2"); //true
reg.test("^"); //false

// 5. /([^?=&]+)(=([^&]))/
let uri =
  "http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv";
let queryString = {};
uri.replace(new RegExp("([^?=&]+)(=([^&]))?", "g"), function ($0, $1, $2, $3) {
  queryString[$1] = $3;
});

console.log("ID: " + queryString["product_id"]);
