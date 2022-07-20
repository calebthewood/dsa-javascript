"use strict"

// 1. count longest possible sequential, increasing subset on an array

/*
[5,8,1,2,7,6,9] --> 4
  because: 5,6,7,8,9
*/

function maxTickets(tickets) {
  const length = tickets.length;
  if (length === 0) return 0;
  if (length === 1) return 1;

  let maxCount = 1;
  let left = 0;
  let right = 0;
  let count = 1;

  while (left <= length) {
      right++;
      let t1 = tickets[left];
      let t2 = tickets[right];

      if ((t1 === t2 || t1+1 === t2) && left != right) {
          count++;
      }
      if (right >= length) {
          left++;
          right = left;
          maxCount = Math.max(maxCount, count);
          count = 1;
      }
  }
  return maxCount;
}


// 2. find number of k-length+ profitable streaks, I think??
/**
 * Accepts a sorted array of stock prices, and number, k.
 * Returns the number of k-length streaks found in the array.
 *
 * Edge cases,
 * what to do if k is 2, and there is a 6 month streak? return 1 or 3? idk
 *  */
function countHighlyProfitableMonths(stockPrices, k) {
  let count = 0;

  return stockPrices.reduce( (streak, thisMonth, i, arr) => {
      let nextMonth = arr[i+1];

      if (nextMonth > thisMonth) {
        count++;
        if (count >= k) {
          count = 0;
          return streak + 1;
        }
      }
      return streak + 0;
  }, 0);
}

// 3. select user name and distance traveled, display top 100 in descending order
// data pulled from 2 tables

SELECT users.name, rides.distance
  FROM users
  JOIN rides
    ON rides.userid = users.id
  GROUP BY users.name
  ORDER BY rides.distance DESC
  LIMIT 100;
