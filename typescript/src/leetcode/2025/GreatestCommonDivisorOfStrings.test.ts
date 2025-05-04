import { gcdOfStrings } from "./GreatestCommonDivisorOfStrings";

describe("Greatest Common Divisor of Strings", () => {
  const testCases = [
    {
      name: "str2が最大公約の文字列になっている",
      str1: "ABCABC",
      str2: "ABC",
      expected: "ABC",
    },
    {
      name: "str1が最大公約の文字列になっている",
      str1: "AB",
      str2: "ABABAB",
      expected: "AB",
    },
    {
      name: "str1と2が同じ",
      str1: "ABC",
      str2: "ABC",
      expected: "ABC",
    },
    {
      name: "最大公約の文字列になっていない",
      str1: "ABCDC",
      str2: "ABC",
      expected: "",
    },
    {
      name: "最大公約の文字列になっていない",
      str1: "AAAAAAAAA",
      str2: "AAACCC",
      expected: "",
    },
  ];
  it.each(testCases)("$name", ({ str1, str2, expected }) => {
    const result = gcdOfStrings(str1, str2);
    expect(result).toEqual(expected);
  });
});
