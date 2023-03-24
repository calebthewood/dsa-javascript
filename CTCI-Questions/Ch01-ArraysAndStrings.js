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

/** 1.2 Check Permutation
 * Given two strings, write a method to decide if one is a permutation of the other.
 * Approaches -> Time O(n), Space O(n)
 * 1) build 2 freqCounter, compare them
 *    - create freqA & freqB,
 *    - iterate over freqA
 *      - if no match, fail
 *     - win at end
 */
function checkPermutation(stringA, stringB) {
  if (stringA.length !== stringB.length) return false;
  const freqsA = {};
  const freqsB = {};
  for (let char of stringA) freqsA[char] = freqsA[char] + 1 || 1;
  for (let char of stringB) freqsB[char] = freqsB[char] + 1 || 1;

  for (let char in freqsA) {
    if (freqsA[char] !== freqsB[char]) {
      return false;
    }
  }
  return true;
}

/** 1.3 URLify.
 * Replace all spaces in a string with %20
 * Approaches -> I'd argue #1 is best for JS, but #2 is more language agnostic.
 *  Time O(n), SpaceO(n)
 * 1) Use js method .replaceAll()
 * 2) Build new string from old string
 *    - Trim trailing white space (assumes no other whitespace)
 *    - Iterate over input with trimmed length
 *      - concat char or '%20' to url string
 *    - return url string
 * 3) Use array .split(" ").join("%20")
 * 4) Convert to array, manually iterate and change spaces
 * */
function urlify(string) {
  let url = "";
  const len = findTrueLength(string);
  for (let i = 0; i < len; i++) {
    url += string[i] === " " ? "%20" : string[i];
  }
  return url;
}

/** Helper to 1.3 finds length excluding trailing whitespaces
 *  JS has a trim method, but I'm trying to be language agnostic here
 */
function findTrueLength(string) {
  if (!string.length) return 0;
  const len = string.length - 1;
  // i represents true length of string
  for (let i = len; i >= 0; i--) {
    if (string[i] !== " ") {
      return i + 1;
    }
  }
  return i;
}

module.exports = { isUnique, checkPermutation, urlify };