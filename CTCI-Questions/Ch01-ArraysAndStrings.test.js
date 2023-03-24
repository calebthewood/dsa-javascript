const { isUnique, checkPermutation, urlify, palindromePermutation } = require("./Ch01-ArraysAndStrings");

describe("1.1 isUnique Function", () => {
  test("Should return true if all characters in a string are unique", () => {
    expect(isUnique("string")).toEqual(true);
  });
  test("Should return false if string contains duplicate chars", () => {
    expect(isUnique("collateral")).toEqual(false);
  });
  test("Should return true if string empty", () => {
    expect(isUnique("")).toEqual(true);
  });
  test("Should work with string of numbers", () => {
    expect(isUnique("1234567891")).toEqual(false);
  });
});

describe("1.2 checkPermutation Function", () => {
  test("Should return true if strings are permutations", () => {
    expect(checkPermutation("string", "gritsn")).toEqual(true);
  });
  test("Should return false if strings are different lengths", () => {
    expect(checkPermutation("collateral", "phoebe")).toEqual(false);
  });
  test("Should return true if strings empty", () => {
    expect(checkPermutation("", "")).toEqual(true);
  });
  test("Should work with strings of numbers", () => {
    expect(checkPermutation("123456789", "123456789")).toEqual(true);
  });
  test("Should work with when last char varies", () => {
    expect(checkPermutation("garbage", "garbaga")).toEqual(false);
  });
  test("Should work with with char in a not in b", () => {
    expect(checkPermutation("tacocat", "tacicat")).toEqual(false);
  });
});

describe("1.3 URLify Function", () => {
  test("Should replace spaces and ignore trailing whitespace", () => {
    expect(urlify("Mr John Smith     ")).toEqual("Mr%20John%20Smith");
  });
  test("Should make no changes if no spaces", () => {
    expect(urlify("thisUrlHasNoSpace")).toEqual("thisUrlHasNoSpace");
  });
  test("Should return empty string if only spaces", () => {
    expect(urlify("")).toEqual("");
  });
  test("Should work with strings of numbers", () => {
    expect(urlify("12 34 56 789 ")).toEqual("12%2034%2056%20789");
  });
});

describe("1.4 Palindrome Permutation", () => {
  test("Should should return true if string is palindrom", () => {
    expect(palindromePermutation("tacocat")).toEqual(true);
  });
  test("Should return true if palindrom has space", () => {
    expect(palindromePermutation("taco cat")).toEqual(true);
  });
  test("Should return true if permutation of palidrome", () => {
    expect(palindromePermutation("atco cat")).toEqual(true);
  });
  test("Should return false if not a permutation of palindrome", () => {
    expect(palindromePermutation("George")).toEqual(false);
  });
  test("Should ignore no alphabetic characters", () => {
    expect(palindromePermutation("ta!coc^a8t")).toEqual(true);
  });
});