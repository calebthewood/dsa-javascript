"use strict";
/** 1.1 Is Unique.
 * Determines if a string contains all unique characters.
 * @param {string} string - a plain string
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
 * @param {string} stringA - the first string
 * @param {string} stringB - the second string
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
 * @param {string} string - a string to be converted to valid url
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
 * @param {string} string - potential palindrome
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
 * @param {string} stringA - the first string
 * @param {string} stringB - the second string
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

/** deleteCharAt
 * Utility fn for oneAway
 * @param {string} string - string to be modified
 * @param {number} idx - index of the character to be removed
 * @returns {string} string with character at idx removed
 */
function deleteCharAt(string, idx) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (i !== idx) output += string[i];
  }
  return output;
}

/** betterOneAway
 * taken from:
 * https://wentao-shao.gitbook.io/leetcode/string/161.one-edit-distance
 * @param {string} stringA
 * @param {string} stringB
 * @returns {boolean} true if strings vary by 1 or 0 edits
 */
function betterOneAway(stringA, stringB) {
  const lenA = stringA.length;
  const lenB = stringB.length;
  if (Math.abs(lenA - lenB) > 1) return false;
  const len = Math.min(lenA, lenB);
  let idxA = 0;
  let idxB = 0;
  while (idxA < len && stringA.charAt(idxA) === stringB.charAt(idxA)) idxA++;
  while (idxB < len - idxA && stringA.charAt(lenA - 1 - idxB) === stringB.charAt(lenB - 1 - idxB)) idxB++;
  return lenA + lenB - len - 1 === idxA + idxB;
}

/** 1.6 String Compression
 *  Compresses repeated characters in a string. aaabbc -> a3b2c
 *  @param {string} string - A regular string
 *  @returns {string} a string where repeated chars have been compressed
 *
 *  Approaches -> Time O(n), Space O(n)
 *  1) Init 2 pointers, counter at 0, and output var
 *    - while char at p1 == char at p2, count ++
 *    - if not,
 *      - output+= p1 char + count,
 *      - p1 = p2,
 *      - start again
 */
function stringCompression(string) {
  let left = 0;
  let right = 0;
  let output = "";
  const len = string.length;
  let char = string[left];

  while (right <= len) {
    if (char !== string[right]) {
      output += char + String(right - left);
      left = right;
      char = string[left];
    }
    right++;
  }
  return output.length > string.length ? string : output;
}

const matrixStart = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];
const matrixEnd = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];

/** 1.7 Rotate Matrix
 * Rotates N X N matrix 90 degrees clockwise, in place.
 * @param {Array} image - the original image
 * @returns {Array} image rotated by 90 degrees
 *
 * Big O: Time O(n) - Space O(n)
 */
function rotateMatrix(image) {
  const rows = image.length;
  const cols = image[0].length;
  const output = [];
  // to rotate counter-clockwise, switch push & unshift.
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(image[cols - 1 - j][rows - 1 - i]);
    }
    output.unshift(row);
  }
  return output;
}

/** 1.8 Zero Matrix
 *  Zeros out any column or row in in a matrix containing a 0
 *  @param {Array} matrix
 *  @returns {Array} matrix modified
 *
 *  Big O: Time O(n) - Space O(n)
 *
 *  Approach
 *    iterate thru matrix
 *      - record x and y for each found 0
 *    iterate thru matrix
 *      - if x or y in record, change element to 0
 */
function zeroMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const xCoords = new Set();
  const yCoords = new Set();
  // record 0 locations
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (matrix[y][x] === 0) {
        xCoords.add(x);
        yCoords.add(y);
      }
    }
  }
  // change any element in a row or column with a 0 to 0
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (xCoords.has(x) || yCoords.has(y)) {
        matrix[y][x] = 0;
      }
    }
  }
  return matrix;
}

/** 1.9 String Rotation
* Checks if one string is a rotation of another string.
 *
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {boolean} True if str2 is a rotation of str1, false otherwise.
 */
function isStringRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  const s1s1 = s1 + s1;
  // using .includes method in place of the prompt's 'isSubstring' fn.
  return s1s1.includes(s2);
}

module.exports = {
  isUnique,
  checkPermutation,
  urlify,
  palindromePermutation,
  oneAway,
  betterOneAway,
  stringCompression,
  rotateMatrix,
  zeroMatrix,
  isStringRotation
};
