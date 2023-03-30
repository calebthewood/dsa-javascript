const { generateDupLL, LinkedList, Node } = require('./Ch02-LinkedLists');



describe("2.1 Remove Duplicates", () => {
  const listA = generateDupLL(20)
  test("Should have initial length of 40", () => {
    expect(listA.length).toEqual(40);
  });
  test("Should have length of 20 after removing dups", () => {
    listA.removeDups()
    expect(listA.length).toEqual(20);
  });
});