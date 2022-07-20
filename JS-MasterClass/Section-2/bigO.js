"use-strict"

/** Mathmatical Approach to summing from 0 to n */
function addUpTo(n) {
  return n * (n + 1) / 2;
}

/* Call functions from here to test speed */
var t1 = performance.now();
//fn call here
var t2 = performance.now();
console.log(`Time Elapsed ${(t2 - t1) / 1000} seconds.`)