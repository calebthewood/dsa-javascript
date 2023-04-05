const { generateLL, SinglyLinkedList } = require('./Ch02-LinkedLists');

describe("2.1 Remove Duplicates", () => {
  const listA = generateLL(20, "duplicate");
  test("Should have initial length of 40", () => {
    expect(listA.length).toEqual(40);
  });
  test("Should have length of 20 after removing dups", () => {
    listA.removeDups();
    expect(listA.length).toEqual(20);
  });
});

describe("2.2 Return Kth to end", () => {
  const listB = generateLL(20);
  test("Should have initial length of 20", () => {
    expect(listB.length).toEqual(20);
  });
  test("Should return 15 as 5th from end in 1,2,3..20", () => {
    expect(listB.findFromEnd(5).val).toEqual(15);
  });
}); 15, 16, 17, 18, 19, 20;

describe("2.3 Delete Middle Node", () => {
  const listC = generateLL(5);
  test("Should have initial length of 5", () => {
    expect(listC.length).toEqual(5);
  });

  test("Should delete node 2", () => {
    const node2 = listC.findFromEnd(3);
    listC.deleteMiddleNode(node2);
    let result = listC.toString();
    expect(result).toEqual('1,3,4,5');
  });

  test("Should delete node 4", () => {
    const node4 = listC.findFromEnd(2);
    listC.deleteMiddleNode(node4);
    let result = listC.toString();
    expect(result).toEqual('1,4,5');
  });
});

describe("2.4 Should partition node on n", () => {
  const listD = generateLL(10, "random");
  // listC = 11,2,33,4,55,6,77,8,99,10
  test("Should be out of order", () => {
    expect(listD.toString()).toEqual("11,2,33,4,55,6,77,8,99,10");
  });
  test("Should be partitioned on 11", () => {
    listD.partition(11);
    expect(listD.toString()).toEqual("2,4,6,8,10,11,33,55,77,99");
  });
});

describe("2.5 Should return linked list with sums", () => {
  const listE = generateLL(3, "none");
  const listF = generateLL(3, "none");
  // 1,2,3  -> 321 + 321 = 642 or 2,4,6
  const summedLLA = new SinglyLinkedList();
  summedLLA.sumList(listE, listF);

  test("Should return summed linked list", () => {
    expect(summedLLA.toString()).toEqual("2,4,6");
  });

  const listG = generateLL(7, "none");
  const listH = generateLL(7, "none");
  // 1,2,3,4,5,6,7  ->  2,4,6,8,0,3,5,1
  const summedLLB = new SinglyLinkedList();
  summedLLB.sumList(listG, listH);

  test("Should handle carrying digits", () => {
    expect(summedLLB.toString()).toEqual("2,4,6,8,0,3,5,1");
  });

  const listI = generateLL(3, "none");
  const listJ = generateLL(4, "none");
  // 1,2,3 + 1,2,3,4  ->  2,4,6,4
  const summedLLC = new SinglyLinkedList();
  summedLLC.sumList(listI, listJ);
  test("Should handle lists of uneven length", () => {
    expect(summedLLC.toString()).toEqual("2,4,6,4");
  });
});

describe("2.5 (reversed) Should return linked list with sums", () => {
  const listE = generateLL(3, "none");
  const listF = generateLL(3, "none");
  // 1,2,3  -> 123 + 123 = 246 or 2,4,6
  const summedLLA = new SinglyLinkedList();
  summedLLA.reverseSumLists(listE, listF);

  test("Should return summed linked list", () => {
    expect(summedLLA.toString()).toEqual("2,4,6");
  });

  const listG = generateLL(7, "none");
  const listH = generateLL(7, "none");
  // 1,2,3,4,5,6,7  ->  2,4,6,9,1,3,4
  const summedLLB = new SinglyLinkedList();
  summedLLB.reverseSumLists(listG, listH);

  test("Should handle carrying digits", () => {
    expect(summedLLB.toString()).toEqual("2,4,6,9,1,3,4");
  });

  const listI = generateLL(3, "none");
  const listJ = generateLL(4, "none");
  // 1,2,3 + 1,2,3,4  ->  1,3,5,7
  const summedLLC = new SinglyLinkedList();
  summedLLC.reverseSumLists(listI, listJ);

  test("Should handle lists of uneven length", () => {
    expect(summedLLC.toString()).toEqual("1,3,5,7");
  });
});

describe("2.6 Is palindrome", () => {

  const listA = generateLL("palindrome", "tacocat");
  test("Should return return true for 'tacocat'", () => {
    expect(listA.isPalindrome()).toBe(true);
  });

  const listB = generateLL("palindrome", "palindrome");
  test("Should return return false for 'palindrome'", () => {
    expect(listB.isPalindrome()).toBe(false);
  });

  const listC = generateLL("palindrome", "abcddcba");
  test("Should return return false for 'abcddcba'", () => {
    expect(listC.isPalindrome()).toBe(true);
  });
});