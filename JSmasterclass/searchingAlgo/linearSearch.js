function linearSearch(arr, val) {
  let iterator = arr.values;

  for (let element of iterator) {
    if (element !== val) {
      return -1;
    } else {
      return arr.findIndex(element);
    }
  }
}

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

linearSearch([34, 56, 1, 2], 1); //2

//////////////////////////////////////////////
// Binary Search PseudoCode
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (arr[middle] < elem) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }

    middle = Math.floor((start + end) / 2);
  }
  return middle;
}

binarySearch([2, 5, 6, 9, 13, 15, 18], 15);

////////////////////////////////////////////////
function naiveSearch(long, short) {
    for(let i=0; i< long.length; i++) {
        
    }
}

naiveSearch("lorie loled", "lol");
