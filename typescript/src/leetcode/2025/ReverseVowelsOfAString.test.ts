import { reverseVowels } from "./ReverseVowelsOfAString";

describe("Reverse Vowels of a String", () => {
  test("Example 1: 'IceCreAm' should return 'AceCreIm'", () => {
    expect(reverseVowels("IceCreAm")).toBe("AceCreIm");
  });

  test("Example 2: 'leetcode' should return 'leotcede'", () => {
    expect(reverseVowels("leetcode")).toBe("leotcede");
  });

  test("Empty string should return empty string", () => {
    expect(reverseVowels("")).toBe("");
  });

  test("String with no vowels should remain unchanged", () => {
    expect(reverseVowels("bcdfghjkl")).toBe("bcdfghjkl");
  });

  test("String with only vowels should be reversed", () => {
    expect(reverseVowels("aeiou")).toBe("uoiea");
  });

  test("String with mixed case vowels should reverse vowels correctly", () => {
    expect(reverseVowels("AbCdEfGhIjOu")).toBe("ubCdOfGhIjEA");
  });

  test("String with repeated vowels should reverse vowels correctly", () => {
    expect(reverseVowels("hello")).toBe("holle");
  });

  test("String with spaces and special characters should only reverse vowels", () => {
    expect(reverseVowels("a.e i,o!u")).toBe("u.o i,e!a");
  });
});
