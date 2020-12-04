// var array1 = [1, 2, 3, 4];

// var array1 = ["all", "cows", "are", "big"];

// // 0,1,2,3
// for (var index in array1) {
//   console.log(index);
// }

// // all, cows, are ,big
// for (var index in array1) {
//   console.log(array1[index]);
// }

// // all, cows, are, big
// for (var index of array1) {
//   console.log(element);
// }

// var array1 = ["all", "cows", "are", "big"];

// array1.forEach(function (element, index) {
//   console.log(element);
// });

// array1.forEach(function (element, index) {
//   console.log(aarray1[index]);
// });

// // slice(begin, end)
// var array1 = [1, 2, 3, 4];

// array1.splice(1, 2); // slice

// // from() to create a new array
// var array1 = [1, 2, 3, 4];
// var array2 = Array.from(array1);

// array2[0] = 5;

// // concat() // add array in the end
// var array1 = [1, 2, 3, 4];
// array1.concat();
// array1.concat([2, 3, 4]);

// slice();
function arraySlice(array, beginIndex, endIndex) {
  if (!beginIndex && !endIndex) {
    return array;
  }

  if (!endIndex) endIndex = array.length;

  var partArray = [];

  for (var i = beginIndex; i < endIndex; i++) {
    partArray.push(array[i]);
  }

  return partArray;
}
