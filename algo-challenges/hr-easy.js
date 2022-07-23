/**
 * Subarray Division - 'birthday'
 * Returns count of subarrays in s that
 *  sum to m and have a length of d
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 *
 * time: O(n * m) space: O(1)
 */

function birthday(s, d, m) {
  const term = s.length;
  let [left, right, count, sum, len] = [0, 0, 0, 0, 0];

  while (left < term) {
    sum += s[right];
    len += 1;

    if (sum === d && len === m) {
      count += 1;
      left += 1;
      right = left;
      sum = 0;
      len = 0;
    } else {
      right += 1;
      if (right >= term) {
        left += 1;
        right = left;
        sum = 0;
        len = 0;
      }
    }
  }
  return count;
}


/**
 * 'divisibleSumPairs'
 *
 * Given an array of integers and a positive integer k, determine the
 * number of (i,j) pairs where i<j and ar[i]+ar[j] is divisible by k
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 *
 * time: O(n * m) space: O(1)
 */

function divisibleSumPairs(n, k, ar) {
  let [i, j, count] = [0, 1, 0];

  while (i < n) {
    if (j >= n) {
      i += 1;
      j = i + 1;
    }
    if (i < j && (ar[i] + ar[j]) % k === 0) {
      count += 1;
    }
    j += 1;
  }
  return count;
}

/**
 * 'migratoryBirds'
 * Returns the number of sightings from the most sighted bird.
 * in a tie, chooses the lower of id #'s in
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 *
 * time: O(n) space: O(n)
 */

function migratoryBirds(arr) {
  const birdBook = {};
  let maxCount = 0;
  let maxBird = 0;
  //freq. counter
  for (let bird of arr) {
    if (birdBook[bird]) {
      birdBook[bird] += 1;
    } else {
      birdBook[bird] = 1;
    }
  }

  for (let bird in birdBook) {
    let count = birdBook[bird];
    if (count > maxCount) {
      maxCount = count;
      maxBird = Number(bird); // Ids converted to Ints for comparison
    } else if (count === maxCount) {
      let thisBird = Number(bird);
      count = Math.min(maxBird, thisBird);
    }
  }
  return maxBird;
}

/**
 * Determines whether a given year is a leap year,
 *  * specific to Russia *
 * Accepts a year
 * Returns Boolean
 * 1918 --> False
 */
function isRussoLeapYear(year) {
  // Gregorian Calendar
  if (year >= 1918) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    } else {
      return false;
    }
    // Julian Calendar
  } else {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

/**
 * 'dayOfProgrammer'
 *
/**
 * Determines whether a given year is a leap year,
 *  * specific to Russia *
 * Accepts a year
 * Returns Boolean
 * 1918 --> False
 */
function isRussoLeapYear(year){
    // Gregorian Calendar
    if (year >= 1918) {
        if (year % 400 === 0) {
            return true;
        } else if (year % 4 === 0 && year % 100 !== 0) {
            return true;
        } else {
            return false;
        }
    // Julian Calendar
    } else {
        if (year % 4 === 0) {
            return true;
        } else {
            return false;
        }
    }
}

function dayOfProgrammer(year) {
    const isLeap = isRussoLeapYear(year);
    if (year === 1918) return "26.09.1918";
    if (isLeap) return `12.09.${year}`;
    if (!isLeap) return `13.09.${year}`;
}
 /**
  * 'dayOfProgrammer'
  * Finds the 256th day of the programmer in Russia for years 1700 - 2700
  * accounts for change from Julian to Gregorian calendars
  * The function is expected to return a STRING.
  * The function accepts INTEGER year as parameter.
  */
function dayOfProgrammer(year) {
  const isLeap = isRussoLeapYear(year);
  if (year === 1918) return "26.09.1918";
  if (isLeap) return `12.09.${year}`;
  if (!isLeap) return `13.09.${year}`;
}

/**
 * 'bonAppetit'
 * Determines whether party to a bill has been overcharged
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */
function bonAppetit(bill, k, b) {
  const total = bill.reduce((acc, curr) => acc + curr);
  const billAnna = (total - bill[k]) / 2;
  const output = billAnna === b ? 'Bon Appetit' : (b - billAnna);
  console.log(output);
  return output;
}

/**
 * 'sockMerchant'
 *
 * Counts # of pairs present in a list.
 * Accepts array of Integers
 * Returns an Integer
 *
 * time: O(n) space O(n)
 */

function sockMerchant(n, ar) {
  let pairCount = 0;
  const sockDrawer = {};
  for (let sock of ar) {
      if (sock in sockDrawer) {
          sockDrawer[sock] += 1;
      } else {
          sockDrawer[sock] = 1;
      }
  }

  for (let sock in sockDrawer) {
      let sockCount = sockDrawer[sock]
      if (sockCount > 1) {
          pairCount += Math.floor(sockCount / 2);
      }
  }
  return pairCount;
}

/**
 * 'pageCount' Counts the shortes # of page turns to get to a page
 * starting from front or back.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 *
 * time: O(1) space: O(n)
 */
function pageCount(n, p) {
  const dist = n - p;
  //Count from back
  if (p > (n / 2)) {
      // p is 2nd to last in an odd page count
      if (n % 2 === 0 && dist === 1) {
          return dist;
          // count from back with even n
      } else if (n % 2 === 0) {
          return Math.ceil(dist / 2);
          // count from back with odd n
      } else {
          return Math.floor(dist / 2);
      }
  // count from start
  } else {
      return Math.floor(p / 2);
  }
}