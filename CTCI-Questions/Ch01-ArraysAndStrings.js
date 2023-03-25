/** 1.1 Is Unique.
 * Determines if a string contains all unique characters.
 * @param {string} string
 * @returns {boolean}
 *
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
 * @param {string} stringA
 * @param {string} stringB
 * @returns {boolean}
 *
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
 * @param {string} name
 * @returns {string} url
 *
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
 * @param {string} string
 * @returns {number} length
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

/** 1.4 Palindrome Permutation
 * Given a string, write a function to check if it is a permutation of a palindrome.
 * @param {string} string
 * @returns {boolean} true if string is a permutation of a palindrome
 *
 * Approaches -> Time O(n), Space O(n)
 * 1) create freqCounter, check freqs, if >1 odd, fail, else pass
 */
function palindromePermutation(string) {
  const freqs = {};
  let oddCount = 0;
  for (let char of string.toLowerCase()) {
    if ('abcdefghijklmnopqrstuvwxyz'.includes(char)) {
      freqs[char] = freqs[char] + 1 || 1;
    }
  }
  for (let char in freqs) {
    if (freqs[char] % 2 !== 0) {
      oddCount += 1;
      if (oddCount > 1) {
        return false;
      }
    }
  }
  return oddCount <= 1;
}

/** 1.5 One Away
 * Checks whether two strings vary by more than one edit (insert, delete, replace)
 * @param {string} stringA
 * @param {string} stringB
 * @returns {boolean} true if strings vary by 1 or 0 edits
 *
 * Approaches -> #1 Time O(n), Space O(n)
 * 1) If lens ===, check for replacements, else check for deletes
 * 2) If charA !== charB check delete, then check replace
 * 3) 2 pointers, if i !== j, check len, move i or j for longer str, ++count, if count> 1 then false
 *
 *  3 would be optimal, with linear runtime.
 */
function oneAway(stringA, stringB) {
  if (stringA === stringB) return true;
  if (stringA.length - stringB.length > 1) return false;
  // if lengths not equal, check for deletion edit
  const [long, short] = stringA.length > stringB.length ? [stringA, stringB] : [stringB, stringA];
  const len = long.length;
  if (stringA.length !== stringB.length) {
    for (let i = 0; i < len; i++) {
      if (long[i] !== short[i]) {
        let shortened = deleteCharAt(long, i);
        return shortened === short;
      }
    }
    // if lengths equal, check for replace
  } else {
    let count = 0;
    for (let i = 0; i < len; i++) {
      if (long[i] !== short[i]) {
        count += 1;
        if (count > 1) {
          return false;
        }
      }
    }
    return true;
  }
}

function deleteCharAt(string, idx) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (i !== idx) output += string[i];
  }
  return output;
}

module.exports = { isUnique, checkPermutation, urlify, palindromePermutation, oneAway };