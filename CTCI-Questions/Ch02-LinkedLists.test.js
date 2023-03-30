const { generateDupLL, LinkedList, Node } = require('./Ch02-LinkedLists');





describe("2.1 Remove Duplicates", () => {
  test("Should have length of 20 after removing dups", () => {
    const listA = generateDupLL(20)
    listA.removeDups()
    expect(listA.length).toEqual(20);
  });
});