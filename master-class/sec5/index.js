function reverseArray(a) {
  return a.reverse();
}

// 22. Step 4: Solve or simplify
function charCount(str) {
  // make object to return in the end
  let result = {};

  // loop over strings
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // if the char is text/number in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    } else {
      // if the char is NOT text/number, set value to 1
      result[char] = 1;
    }
  }
  // return object at end
  return result;
}
