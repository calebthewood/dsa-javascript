"use strict";
/***************************************************** Easy: Roman to Integer */
/**
 * Converts a valid string of roman numerals into an integer.
 *
 * Example:  "LVIII" --> 58
 *
 * Explanation:   L = 50, V= 5, III = 3.
 *
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  let sum = 0;
  let len = s.length;

  const numerals = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
  }

for (let i = 0; i <= len; i++) {
  let j = i + 1;
  let curr = s[i];
  let next = s[j] || s[i];

  if (numerals[curr] >= numerals[next]) {
      sum += numerals[curr];
  } else if (numerals[curr] < numerals[next]) {
      sum += numerals[next] - numerals[curr];
      i++;
      }
  }
  return sum;
};

/***************************************************** Easy:  */