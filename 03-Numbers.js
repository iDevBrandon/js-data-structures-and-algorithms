function numberEquals(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

numberEquals(0.1 + 0.2, 0.3);

// Maximum
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true

Number.MAX_SAFE_INTEGER + 1.1 === Number.MAX_SAFE_INTEGER + 2.11; // false

Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2; // true
Number.MAX_VALUE + 1.11 === Number.MAX_VALUE + 2.22; // true

// Minimum
Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2; // true

// Number algo
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
