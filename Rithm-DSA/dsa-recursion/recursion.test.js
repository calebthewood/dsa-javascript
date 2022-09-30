const {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
} = require("./recursion");

describe("product", function() {
  it("returns the product of all numbers in an array", function() {
    expect(product([])).toBe(1);
    expect(product([10])).toBe(10);
    expect(product([2, 3, 4])).toBe(24);
  });
});

describe("longest", function() {
  it("returns the length of the longest word in an array of words", function() {
    expect(longest([])).toBe(0);
    expect(longest(["hello"])).toBe(5);
    expect(longest(["hi", "hello", "hola"])).toBe(5);
  });
});

describe("everyOther", function() {
  it("returns a string with every other character in the input", function() {
    expect(everyOther("")).toBe("");
    expect(everyOther("h")).toBe("h");
    expect(everyOther("hello")).toBe("hlo");
  });
});

describe("find", function() {
  let animals = ["duck", "cat", "pony"];

  it("returns true if the value exists", function() {
    expect(find(animals, "duck")).toBe(true);
    expect(find(animals, "cat")).toBe(true);
    expect(find(animals, "pony")).toBe(true);
  });

  it("returns false if value does not exist", function() {
    expect(find(animals, "porcupine")).toBe(false);
  });
});

describe("isPalindrome", function() {
  it("returns true if the string is a palindrome", function() {
    expect(isPalindrome("")).toBe(true);
    expect(isPalindrome("x")).toBe(true);
    expect(isPalindrome("noon")).toBe(true);
    expect(isPalindrome("tacocat")).toBe(true);

  });

  it("returns false if the string is not a palindrome", function() {
    expect(isPalindrome("az")).toBe(false);
    expect(isPalindrome("tacodog")).toBe(false);
  });
});

describe("findIndex", function() {
  let animals = ["duck", "cat", "cat", "pony"];

  it("returns the first index of the value in the array if the value exists", function() {
    expect(findIndex(animals, "duck")).toBe(0);
    expect(findIndex(animals, "cat")).toBe(1);
    expect(findIndex(animals, "pony")).toBe(3);
  });

  it("returns -1 if the value does not exist", function() {
    expect(findIndex(animals, "porcupine")).toBe(-1);
  });
});

describe("revString", function() {
  it("returns a reversed copy of the string", function() {
    expect(revString("")).toBe("");
    expect(revString("x")).toBe("x");
    expect(revString("cat")).toBe("tac");
    expect(revString("duck")).toBe("kcud");
  });
});

describe("gatherStrings", function() {
  it("gathers all object string values into an array", function() {
    let whiskey = {
      name: "Whiskey",
      age: 5,
      favFood: "popcorn",
      color: "black",
      barks: false
    };
    expect(gatherStrings(whiskey).sort()).toEqual(["Whiskey", "popcorn", "black"].sort());
  });

  it("handles nested objects", function() {
    let nestedObj = {
      firstName: "Lester",
      favoriteNumber: 22,
      moreData: {
        lastName: "Testowitz"
      },
      funFacts: {
        moreStuff: {
          anotherNumber: 100,
          deeplyNestedString: {
            almostThere: {
              success: "you made it!"
            }
          }
        },
        favoriteString: "nice!"
      }
    };
    expect(gatherStrings(nestedObj).sort()).toEqual(["Lester", "Testowitz", "you made it!", "nice!"].sort());
  });
});

describe("binarySearch", function () {
  it("should find the index of a value in a sorted array", function() {
    expect(binarySearch([1, 2, 3, 4], 4)).toEqual(3);
    expect(binarySearch([1, 2], 1)).toEqual(0);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 6)).toEqual(5);
  });

  it("should return -1 if the value is not found", function() {
    expect(binarySearch([], 0)).toEqual(-1);
    expect(binarySearch([1, 2, 3, 4], 0)).toEqual(-1);
    expect(binarySearch([1, 2], 11)).toEqual(-1);
  });
});