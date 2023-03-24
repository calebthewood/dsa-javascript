const { isUnique, checkPermutation } = require("./Ch01-ArraysAndStrings");

describe("1.1 isUnique Function", () => {
  test("Should return true if all characters in a string are unique", () => {
    let result = isUnique("string");
    expect(result).toEqual(true);
  });

  test("Should return false if string contains duplicate chars", () => {
    let result = isUnique("collateral");
    expect(result).toEqual(false);
  });

  test("Should return true if string empty", () => {
    let result = isUnique("");
    expect(result).toEqual(true);
  });

  test("Should work with string of numbers", () => {
    let result = isUnique("1234567891");
    expect(result).toEqual(false);
  });
});

describe("1.2 checkPermutation Function", () => {
  test("Should return true if strings are permutations", () => {
    let result = checkPermutation("string", "gritsn");
    expect(result).toEqual(true);
  });

  test("Should return false if strings are different lengths", () => {
    let result = checkPermutation("collateral", "phoebe");
    expect(result).toEqual(false);
  });

  test("Should return true if strings empty", () => {
    let result = checkPermutation("","");
    expect(result).toEqual(true);
  });

  test("Should work with strings of numbers", () => {
    let result = checkPermutation("123456789", "123456789");
    expect(result).toEqual(true);
  });

  test("Should work with similar strings", () => {
    let result = checkPermutation("garbage", "garbaga");
    expect(result).toEqual(false);
  });

  test("Should work with similar strings", () => {
    let result = checkPermutation("tacocat", "tacicat");
    expect(result).toEqual(false);
  });
});