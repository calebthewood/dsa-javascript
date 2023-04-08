const { describe } = require('node:test');
const { generateLoopedLL, generateLL, SinglyLinkedList, generateIntersectionLists } = require('./Ch02-LinkedLists');

describe("2.1 Remove Duplicates", () => {
  const listA = generateLL(20, "duplicate");
  test("2.1 Should have initial length of 40", () => {
    expect(listA.length).toEqual(40);
  });
  test("2.1 Should have length of 20 after removing dups", () => {
    listA.removeDups();
    expect(listA.length).toEqual(20);
  });
});

describe("2.2 Return Kth to end", () => {
  const listA = generateLL(20);
  const listB = new SinglyLinkedList()
  test("2.2 Should have initial length of 20", () => {
    expect(listA.length).toEqual(20);
  });
  test("2.2 Should return 15 as 5th from end in 1,2,3..20", () => {
    expect(listA.findFromEnd(5).val).toEqual(15);
  });
  test("2.2 Should return 20 as 0 from end in 1,2,3..20", () => {
    expect(listA.findFromEnd(0).val).toEqual(20);
  });
  test("2.2 Should return 1 as 20 from end in 1,2,3..20", () => {
    expect(listA.findFromEnd(20).val).toEqual(1);
  });
  test("2.2 Should return 1 as 20 from end in 1,2,3..20", () => {
    expect(listA.findFromEnd(20).val).toEqual(1);
  });
  test("2.2 Should return null from out of range k", () => {
    expect(listB.findFromEnd(21)).toEqual(null);
  });
  test("2.2 Should return null from empty list", () => {
    expect(listB.findFromEnd(5)).toEqual(null);
  });
});

describe("2.3 Delete Middle Node", () => {
  const listC = generateLL(5);
  test("2.3 Should have initial length of 5", () => {
    expect(listC.length).toEqual(5);
  });

  test("2.3 Should delete node 2", () => {
    const node2 = listC.findFromEnd(3);
    listC.deleteMiddleNode(node2);
    let result = listC.toString();
    expect(result).toEqual('1,3,4,5');
  });

  test("2.3 Should delete node 4", () => {
    const node4 = listC.findFromEnd(2);
    listC.deleteMiddleNode(node4);
    let result = listC.toString();
    expect(result).toEqual('1,4,5');
  });

  test("2.3 Should work for list of 3 nodes", () => {
    const node = listC.findFromEnd(1);
    listC.deleteMiddleNode(node);
    let result = listC.toString();
    expect(result).toEqual('1,5');
  });
});

describe("2.4 Partition", () => {
  const listD = generateLL(10, "random");
  // listC = 11,2,33,4,55,6,77,8,99,10
  test("2.4 Should be out of order", () => {
    expect(listD.toString()).toEqual("11,2,33,4,55,6,77,8,99,10");
  });
  test("2.4 Should be partitioned on 11", () => {
    listD.partition(11);
    expect(listD.toString()).toEqual("2,4,6,8,10,11,33,55,77,99");
  });
});

describe("2.5 Sum List", () => {
  const listE = generateLL(3, "none");
  const listF = generateLL(3, "none");
  // 1,2,3  -> 321 + 321 = 642 or 2,4,6
  const summedLLA = new SinglyLinkedList();
  summedLLA.sumList(listE, listF);

  test("2.5 Should return summed linked list", () => {
    expect(summedLLA.toString()).toEqual("2,4,6");
  });

  const listG = generateLL(7, "none");
  const listH = generateLL(7, "none");
  // 1,2,3,4,5,6,7  ->  2,4,6,8,0,3,5,1
  const summedLLB = new SinglyLinkedList();
  summedLLB.sumList(listG, listH);

  test("2.5 Should handle carrying digits", () => {
    expect(summedLLB.toString()).toEqual("2,4,6,8,0,3,5,1");
  });

  const listI = generateLL(3, "none");
  const listJ = generateLL(4, "none");
  // 1,2,3 + 1,2,3,4  ->  2,4,6,4
  const summedLLC = new SinglyLinkedList();
  summedLLC.sumList(listI, listJ);
  test("2.5 Should handle lists of uneven length", () => {
    expect(summedLLC.toString()).toEqual("2,4,6,4");
  });
});

describe("2.5 Sum List (reversed)", () => {
  const listE = generateLL(3, "none");
  const listF = generateLL(3, "none");
  // 1,2,3  -> 123 + 123 = 246 or 2,4,6
  const summedLLA = new SinglyLinkedList();
  summedLLA.reverseSumLists(listE, listF);

  test("2.5 Should return summed linked list", () => {
    expect(summedLLA.toString()).toEqual("2,4,6");
  });

  const listG = generateLL(7, "none");
  const listH = generateLL(7, "none");
  // 1,2,3,4,5,6,7  ->  2,4,6,9,1,3,4
  const summedLLB = new SinglyLinkedList();
  summedLLB.reverseSumLists(listG, listH);

  test("2.5 Should handle carrying digits", () => {
    expect(summedLLB.toString()).toEqual("2,4,6,9,1,3,4");
  });

  const listI = generateLL(3, "none");
  const listJ = generateLL(4, "none");
  // 1,2,3 + 1,2,3,4  ->  1,3,5,7
  const summedLLC = new SinglyLinkedList();
  summedLLC.reverseSumLists(listI, listJ);

  test("2.5 Should handle lists of uneven length", () => {
    expect(summedLLC.toString()).toEqual("1,3,5,7");
  });
});

describe("2.6 Is Palindrome", () => {
  const tacocat = generateLL("palindrome", "tacocat");
  const palindrome = generateLL("palindrome", "palindrome");
  const noon = generateLL("palindrome", "noon");
  const emptyChar = generateLL("palindrome", "");
  const emptyList = new SinglyLinkedList()

  test("2.6 Should return return true for 'tacocat'", () => {
    expect(tacocat.isPalindrome()).toBe(true);
  });
  test("2.6 Should return return false for 'palindrome'", () => {
    expect(palindrome.isPalindrome()).toBe(false);
  });
  test("2.6 Should return return true for 'noon'", () => {
    expect(noon.isPalindrome()).toBe(true);
  });
  test("2.6 Should return return false for empty string", () => {
    expect(noon.isPalindrome()).toBe(true);
  });
  test("2.6 Should return return false for empty string", () => {
    expect(emptyChar.isPalindrome()).toBe(false);
  });
  test("2.6 Should return return false for empty string", () => {
    expect(emptyList.isPalindrome()).toBe(false);
  });
});

describe("2.7 Intersection", () => {
  //set 1 - intersect middle
  const [listA, listB] = generateIntersectionLists(0, 6, 3);   //listA = 1,2,22,3,4,5 listB = 0,11,22,3,4,5
  let resultA = new SinglyLinkedList().intersection(listA, listB);   //inter = 22,3,4,5
  // set 2 no intersect
  const listC = generateLL(100);
  const listD = generateLL(50);
  let resultB = new SinglyLinkedList().intersection(listC, listD);
  // set 3 intersect last node
  const [listE, listF] = generateIntersectionLists(0, 1, 9); // clunky fn
  let resultC = new SinglyLinkedList().intersection(listE, listF);

  test("2.7 Should be valid linked list - ListA", () => {
    expect(listA.toString()).toEqual('1,2,22,3,4,5');
  });
  test("2.7 Should be valid linked list - ListB", () => {
    expect(listB.toString()).toEqual('0,11,22,3,4,5');
  });
  test("2.7 Should intersect at 22", () => {
    expect(resultA.val).toEqual(22);
  });
  test("2.7 Should return null if no intersection", () => {
    expect(resultB).toEqual(null);
  });
  test("2.7 Should return final node", () => {
    expect(resultC.val).toEqual(88);
  });
});

describe("2.8 Detect Loop", () => {
  const loop = generateLoopedLL(5, 2); // loop
  const largeLoop = generateLoopedLL(500, 250); // large loop
  const noLoop = generateLoopedLL(5, 6); // no loop
  const emptyList = new SinglyLinkedList(); // empty list

  test("2.8 Should return node 2", () => {
    expect(loop.loopDetection().val).toEqual(2);
  });
  test("2.8 Should return node 250", () => {
    expect(largeLoop.loopDetection().val).toEqual(250);
  });
  test("2.8 Should return null when no loop detected", () => {
    expect(noLoop.loopDetection()).toEqual(null);
  });
  test("2.8 Should return null with empty list", () => {
    expect(emptyList.loopDetection()).toEqual(null);
  });
});
