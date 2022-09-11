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
var romanToInt = function (s) {
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
    };

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

/************************************************** Easy: Invert Binary Tree  */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function invertTree(root) {
    if (!root) return root;
    const nodeStack = [root];

    while (nodeStack.length > 0) {
        let current = nodeStack.pop();
        let temp = current.left;
        current.left = current.right;
        current.right = temp;

        if (current.left) {
            nodeStack.push(current.left);
        }
        if (current.right) {
            nodeStack.push(current.right);
        }
    }
    return root;
};


/*********************************** Easy: Remove Duplicates from Sorted Array*/
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    let start = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i + 1]) {
            nums[start] = nums[i];
            start++;
        }
    }
    return start;
};

/***************************************************** Easy: Two Sum */
/**
 * Notes:
 * - nums not sorted
 * Plan
 * - work from the front, O(n*m)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var NaiveTwoSum = function (nums, target) {
    const len = nums.length - 1;
    let left = 0;
    let right = 1;

    while (left < len) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            return [left, right];
        } else if (right === len) {
            left += 1;
            right = left + 1;
        } else {
            right += 1;
        }
    }
};

function twoSum(nums, target) {
    const numsRef = {};
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        let num = nums[i];
        if (num in numsRef) {
            numsRef[num].push(i);
        } else {
            numsRef[num] = [i];
        }
    }
    for (let i = 0; i < len; i++) {
        let num = nums[i];
        let diff = target - num;
        if (diff in numsRef) {
            let idxOne = numsRef[num][0];
            let idxTwo = numsRef[diff][0];
            if (numsRef[diff].length === 2) {
                return numsRef[diff];
            } else if (idxOne !== idxTwo) {
                return [idxOne, idxTwo];
            }
        }
    }
};

/*************************************************** Easy: Longest Substring */
/**
 * Time Complexity: O(n^2)
 * Space Space Complexity: O(n)
 *
 * Approach: Nested for loop
 */
var naiveLengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let len = s.length;
    let set = new Set();

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            if (!set.has(s[j])) {
                set.add(s[j]);
                maxLen = Math.max(maxLen, set.size);
            } else {
                set.clear();
                break;
            }
        }
    }
    return maxLen;
};

/**
 * Time Complexity: O(n)
 * Space Space Complexity: O(n)
 *
 * Approach: Sliding Window
 */
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let len = s.length;
    let i = 0;
    let j = 0;
    let set = new Set();

    while (j < len) {
        if (!set.has(s[j])) {
            set.add(s[j]);
            maxLen = Math.max(maxLen, set.size);
            j++;
        } else {
            set.delete(s[i]);
            i++;
        }
    }
    return maxLen;
};

/**
 * Time Complexity: O(n)
 * Space Space Complexity: O(n)
 *
 * Approach: Nothing special
 */
var myAtoi = function (s) {
    s = s.trim();
    const digits = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);

    let number = "";
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (digits.has(char)) {
            if (char === "0" && number.length > 0) {
                number += char;
            } else {
                number += char;
            }
        } else if (i === 0 && (char === "+" || char === "-")) {
            number += char;
        } else {
            break;
        }
    }
    if (number.length === 1 && !digits.has(number)) return 0;
    const max = 2147483647;
    const min = -2147483648;
    const num = Number(number);
    return Math.min(Math.max(num, min), max);
};
//"21474836460", "21474836460" "00000-42a1234" "   -42" ".1" "  0000000000012345678"
// console.log(myAtoi("  -0000000000012345678"));

var NaiveMaxArea = function (heights) {
    let maxVolume = 0;
    const len = heights.length - 1;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j <= len; j++) {
            let height = Math.min(heights[i], heights[j]);
            let width = j - i;
            let volume = height * width;
            maxVolume = Math.max(volume, maxVolume);
            if (volume === 56) console.log("i: ",
                i, "j: ", j, "width: ", width, "height: ", height);

        }
    }
    return maxVolume;
};

var maxArea = function (height) {
    let maxVolume = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let width = right - left;
        let depth = Math.min(height[left], height[right]);
        let volume = width * depth;
        maxVolume = Math.max(maxVolume, volume);
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return maxVolume;
};

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

    /* 3 cases
    1. first digit is a 1 or 5 etc...
        string += numerals["500"]
    2. first digit is a 2, 3
        repeat numeral n times
        number/digit[0], repeat X digit[0]
        ex: "300", 300/3 --> 100. (string += numerals["100"]) x 3
    3. first digit is 6,7,8
        ex: "600", "600" - "500", string+=numerals["500"],
            then (string += numerals["100"]) x 1;
    4. first digit is 4 or 9
        string += nextNumeralUp + numeralDown;
        ex: "400" --> numerals["400"/4] + numerals["400" + "400"/4]
    */

var NaiveIntToRoman = function(num) {
    const numerals = {
        "1": "I",
        "5": "V",
        "10": "X",
        "50": "L",
        "100": "C",
        "500": "D",
        "1000": "M"
    }
    const numString = String(num);
    let numeral = "";

    for (let i = 0; i < numString.length; i++) {
        let digitsStr = numString[i]; // ex "2000";
        while (digitsStr.length < numString.length - i) { digitsStr += "0";}
        let currentNumber = Number(digitsStr);
        let firstDigit = Number(digitsStr[0])

        if (firstDigit === 1 || firstDigit === 5) {
            numeral += numerals[digitsStr];

        } else if (firstDigit === 2 || firstDigit === 3) {
            let n = currentNumber/firstDigit;
            numeral += numerals[String(n)].repeat(firstDigit);

        } else if (firstDigit >= 6 && firstDigit <= 8) {
            let n = currentNumber / firstDigit;
            let r = firstDigit - 5;
            numeral += numerals[String(n * 5)] + numerals[n].repeat(r);

        } else if (firstDigit === 4 || firstDigit === 9) {
            let n = currentNumber / firstDigit;
            numeral += numerals[String(n)] + numerals[String(currentNumber + n)]
        }
    }
    return numeral;
};

/**
 * I Stole this one from LeetCode b/c it's pretty :), and also the best possible
 * answer. Makes use of array.every()
 */
 var intToRoman = function(num) {
    const m = [
        { symbol: 'M', value: 1000 },
        { symbol: 'CM', value: 900 },
        { symbol: 'D', value: 500 },
        { symbol: 'CD', value: 400 },
        { symbol: 'C', value: 100 },
        { symbol: 'XC', value: 90 },
        { symbol: 'L', value: 50 },
        { symbol: 'XL', value: 40 },
        { symbol: 'X', value: 10 },
        { symbol: 'IX', value: 9 },
        { symbol: 'V', value: 5 },
        { symbol: 'IV', value: 4 },
        { symbol: 'I', value: 1 },
    ];

    let roman = '';
    m.every(({ symbol, value }) => {
        roman += symbol.repeat(Math.floor(num/value));
        num %= value;
        console.log(num % value)
        return num > 0 ? true : false;
    });

    return roman;
};

var threeSum = function(nums) {
    let i = 0;
    let j = nums.length-1;
    let k = 1;
    let movingLeft = true;
    const len = Math.floor(nums.length / 2);
    const output = [];

    while (i < len) {
        let left = nums[i];
        let mid = nums[j];
        let right = nums[k];
        if (left + mid + right === 0) output.push([i,j,k]);

        /*
        1. mid++
        2. mid--
        3. left++ && l
        4. right-- && mid --
        */
    }
};