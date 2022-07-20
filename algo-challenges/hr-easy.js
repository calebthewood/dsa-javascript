/**
 * 'birthday' function. Returns count of subarrays in s that
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