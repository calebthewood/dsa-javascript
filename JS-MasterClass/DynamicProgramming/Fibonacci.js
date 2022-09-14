"use strict";

/**
 * Time Complexity: Exponential O(2^n)
 */
function badFibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// warning, don't go over 45 lol
// console.log(fibonacci(10))

/**
 * Time Complexity: Linear O(n)
 */
function fibonacciMemo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  memo[n] = res;
  return res;
}

function fibonacciTab(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

console.log(fibonacciTab(10000));