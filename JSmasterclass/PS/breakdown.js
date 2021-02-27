function charCount(str) {
  // do sth
  // return an object with keys that are lowercase
}

function charCount(str) {
  // make object to return at end
  let result = {};
  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // if the char is a number/letter AND key in object, add one to count

    if (result[char] > 0) {
      result[char]++;

      // if the char is not number/letter AND in boejct, add it and set value to 1
    } else {
      result[char] = 1;
    }
  }

  return result;
  // if character is sth else (space, period , etc). DOn't do anything
  // return object at end
}

function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      //   if (obj[char] > 0) {
      //     obj[char]++;
      //   } else {
      //     obj[char] = 1;
      //   }
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

charCodeAt(0);
