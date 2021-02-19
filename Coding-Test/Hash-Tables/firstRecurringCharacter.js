// function firstRecurringCharacter(input) {
//   let map = {};

//   for (let i = 0; i < input.length; i++) {
//     if (map[input[i]] !== undefined) {
//       return input[i];
//     } else {
//       map[arr[i]] = i;
//     }
//     console.log(map);
//   }
//   return undefined;
// }

// nested loops O(n^2)
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

firstRecurringCharacter([2, 5, 1, 2, 3, 4, 1, 2, 4]);

// hash table
function firstRecurringCharacter2(input) {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
} // O(n)

firstRecurringCharacter2([2, 5, 1, 2, 3, 4, 1, 2, 4]);
