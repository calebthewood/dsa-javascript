"use strict";

function badFibonacci(n) {
  if (n <= 2) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2)
}
// warning, don't go over 45 lol
// console.log(fibonacci(10))

function fibonacciMemo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n]
  if (n <= 2) return 1;
  let res = fibonacciMemo(n-1, memo) + fibonacciMemo(n-2, memo);
  memo[n] = res;
  return res
}

console.log(fibonacciMemo(100))