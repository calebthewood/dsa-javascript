/************************************ Multiple Pointers */

function sumZeroMultiplePointers(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

/************************************ Frequency Counter */

function createFrequencyCounter(array) {
  let freqs = new Map();

  for (let val of array) {
    let valCount = freqs.get(val) || 0;
    freqs.set(val, valCount + 1);
  }

  return freqs;
}

/************************************ Sliding Window */

function maxSubarrSum(arr, k) {
  let maxSum = 0;

  // get the sum of the first three numbers to start
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }
  let currentSum = maxSum;

  // starting after the first sum, compute the rest
  for (let i = k; i < arr.length; i++) {
    // current window adds new element and chops off left
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

/************************************ Divide and Conquer */

function binarySearch(arr, val) {

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      // middleVal is too small, look at the right half
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      // middleVal is too large, look at the left half
      rightIdx = middleIdx - 1;
    } else {
      // we found our value!
      return middleIdx;
    }
  }

  // left and right pointers crossed, val isn't in arr
  return -1;
}
