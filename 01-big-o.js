function exampleLinear(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}

//exampleLinear(4);

// Quadratic example
function exampleQuadratic(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = i; j < n; j++) {
      console.log(j);
    }
  }
}

//exampleQuadratic(3);

// Cubic example
function exampleCubic(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
    for (var j = i; j < n; j++) {
      console.log(j);
      for (var k = j; k < n; k++) {
        console.log(k);
      }
    }
  }
}

//exampleCubic(3);

// Time complexity
// O(n), f(n) = n
function a(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += 1;
  }
  return count;
}

// O(n), f(n) = 5n
function a(n) {
  var count = 0;
  for (var i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}

// O(n), f(n) = n + 1
function a(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += 1;
  }
  count += 3;
  return count;
}

// Add big Os so n + 5n = 6n, O(n) = n
function a(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += 1; // f(n)=n
  }

  for (var i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}

// mulply big Os so, f(n)= 5n*n, so 5n^2, O(n)=n^2
function a(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += 1;
    for (var i = 0; i < 5 * n; i++) {
      count += 1;
    }
  }
  return count;
}

// power of Big O, f(n)= n^2, 
function a(n) {
  var count = 0;
  for (var i = 0; i < n * n; i++) {
    count += 1;
  }
  return count;
}
