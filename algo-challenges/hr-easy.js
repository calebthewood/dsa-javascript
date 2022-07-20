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
 * time:  space:
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
 * Divisible Sum Pairs - 'migratoryBirds'
 * Returns the number of sightings from the most sighted bird.
 * in a tie, chooses the lower of id #'s in
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 *
 * time comp. O(n) space comp. O(n)
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
          let thisBird = Number(bird)
          count = Math.min(maxBird, thisBird)
      }
  }
  return maxCount;
}
