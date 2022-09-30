"use strict";
/**
 * This function generates all valid n length permutations of
 * parenthesis pairs. Given by Zach for Amazon interview prep.
 *
 *  n = 1 --> ["()"]
 *  n = 2 --> ["(()), "()()"]
 *  n = 3 --> ["((()))","(()())","(())()","()(())","()()()"]
 *
 * @param {Number} n
 * @returns {[String]} all n length valid permutation pairs.
 */
function validParens(n) {
	let parens = new Set("()");

  let count = 1;
  while (count < n) {
  	let newSet = new Set();
    for (let paren in parens) {
    	newSet.add(`(${paren})`);
      newSet.add(`()${paren}`);
      newSet.add(`${paren}()`);
    }
    count += 1;
  	parens = newSet;
  }
  return Array.from(parens);
}