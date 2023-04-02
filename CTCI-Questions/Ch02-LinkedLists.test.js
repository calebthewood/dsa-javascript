const { generateLL, LinkedList, Node } = require('./Ch02-LinkedLists');

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
    let result = listC.print();
    expect(result).toEqual('1,3,4,5');
  });

  test("Should delete node 4", () => {
    const node4 = listC.findFromEnd(2);
    listC.deleteMiddleNode(node4);
    result = listC.print();
    expect(result).toEqual('1,4,5');
  });
});
