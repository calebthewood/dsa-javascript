/** 1.1 Is Unique.
 * Determines if a string contains all unique characters.
 *  Approaches -> #3 Time: O(n) Space: O(n)
 *  1) Convert to set, compare lengths
 *  2) Create reference var, compare at each char. Fail on match, win at end
 *  3) Hash - Frequency Counter, if we go over 1, fail.
 *      - init freqCounter
 *      - iterate over string
 *        - check freqCounter for char
 *          - if char in counter: fail
 *          - else: add char: 1 (value here doesn't matter)
 */
function isUnique(string) {
  if (string.length <= 1) return true;
  const freqCounter = {};
  for (let char of string) {
    if (char in freqCounter) {
      return false;
    }
    freqCounter[char] = 1;
  }
  return true;
}
// console.log(isUnique("string"))