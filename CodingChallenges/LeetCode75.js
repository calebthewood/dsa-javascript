"use strict";

/* #################### Day 1 */

/** Returns an array or running sums relative to the input array
 * @param {number[]} nums
 * @return {number}
 */
var runningSum = function (nums) {
    let sum = 0;
    return nums.map(num => sum += num);
};


/** Finds the index in an array where the sum left of
 *  idx == sum right of idx, element at idx is excluded
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sum = 0;
    let sums = nums.map(num => sum += num);
    for (let i = 0; i < sums.length; i++) {
        if (sums[i] - nums[i] === sum - sums[i]) return i;
    }
    return -1;
};

/* #################### Day 2 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    const len = s.length;
    let sRef = {};
    let tRef = {};
    let sChar;
    let tChar;

    for (let i = 0; i < len; i++) {
        sChar = s[i], tChar = t[i];
        if (sChar in sRef && sRef[sChar] !== tChar) {
            return false;
        } else if (tChar in tRef && tRef[tChar] !== sChar) {
            return false;
        } else {
            sRef[sChar] = tChar;
            tRef[tChar] = sChar;
        }
    }
    return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (!s.length) return true;
    const len = t.length;
    const fin = s.length - 1;
    let sIdx = 0;
    let tIdx = 0;

    while (tIdx < len) {
        if (s[sIdx] === t[tIdx]) {
            if (sIdx === fin) return true;
            sIdx += 1;
        }
        tIdx += 1;
    }
    return false;
};

/* #################### Day 3 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let head = new ListNode();
    if (!list1 && !list2) return list1;
    if (!list1) return list2;
    if (!list2) return list1;

    let l1Node;
    let l2Node;
    let current;

    if (list1.val < list2.val) {
        head = new ListNode(list1.val);
        l1Node = list1.next;
        l2Node = list2;
    } else {
        head = new ListNode(list2.val);
        l1Node = list1;
        l2Node = list2.next;
    }

    current = head;
    while (l1Node && l2Node) {
        if (l1Node.val < l2Node.val) {
            current.next = l1Node;
            l1Node = l1Node.next;
        } else {
            current.next = l2Node;
            l2Node = l2Node.next;
        }
        current = current.next;
    }
    while (l1Node) {
        current.next = l1Node;
        current = current.next;
        l1Node = l1Node.next;
    }
    while (l2Node) {
        current.next = l2Node;
        current = current.next;
        l2Node = l2Node.next;
    }
    return head;
};

/* #################### Day 4 */

/**
 * Time Complexity: Linear O(n)
 * Space Complexity: Constant O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) return head;
    if (!head.next) return head;
    let prev = head;
    let current = head.next;
    let next = current.next;
    head.next = null;

    while (next) {
        current.next = prev;
        prev = current;
        current = next;
        next = next.next;
    }

    current.next = prev;
    return current;
};

/* #################### Day 4 */
/**
 * Time Complexity: Linear O(n)
 * Space Complexity: Constant O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    if (!head) return [];
    if (!head.next) return head;
    let length = 1;
    let current = head.next;

    while (current) {
        length += 1;
        current = current.next;
    }
    let mid = Math.floor(length / 2);
    current = head;

    while (mid > 0) {
        mid -= 1;
        current = current.next;
    }
    return current;
};

/* #################### Day 5 */

/**
 *
 * Time Complexity: Linear, O(n)
 * Space Complexity: Linear, O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function (head) {
    if (!head) return null;
    if (!head.next) return null;
    const visited = new Set();
    let current = head;

    while (current) {
        if (visited.has(current)) {
            return current;
        } else {
            visited.add(current);
            current = current.next;
        }
    }
    return null;
};

/* #################### Day 6 */

/**
 * Time Complexity: Linear, O(n)
 * Space Complexity: Constant, O(1)
 *
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
    const len = prices.length;
    let minPrice = Infinity;
    let maxProfit = 0;
    let price;

    for (let i = 0; i < len; i++) {
        price = prices[i];
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
};

/**
 * Time Compelexity: Linear, O(n)
 * Space Compelexity: Constant, O(1) - b/c characters limited to 26.
 *
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function (s) {
    const charFreqs = {}
    palindromeLen = 0;
    odds = 0;

    for (let char of s) {
        if (char in charFreqs) {
            charFreqs[char] = charFreqs[char] + 1;
        } else {
            charFreqs[char] = 1
        }
    }
    const counts = Object.values(charFreqs)
    if (counts.length === 1) return s.length;

    for (let count of counts) {
        if (count % 2 === 0) {
            palindromeLen += count;
        } else if (count > 1){
            palindromeLen += count - 1;
            odds += 1;
        } else {
            odds += 1;
        }
    }
    if (odds > 0) return palindromeLen + 1;
    return palindromeLen;
};

/* #################### Day 7 */

/**
 * Time Complexity: Linear, O(n)
 * Space Complexity: Linear, O(n)
 *
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function (root) {
    const visited = [];
    function traverse(node) {
        if (node) {
            visited.push(node.val);
            if (node.children) {
                node.children.forEach(child => traverse(child))
            }
        }
    }
    traverse(root);
    return visited
};