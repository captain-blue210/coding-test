import { describe, expect, it } from "vitest";
// Assuming the function will be exported from this path
import { groupAnagrams } from "../src/leetcode/2025/GroupAnagram";

describe("groupAnagrams", () => {
  it("should group basic anagrams correctly", () => {
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const expected = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
    const result = groupAnagrams(strs);
    // Sort inner arrays and outer array for consistent comparison
    const sortInner = (arr: string[][]) =>
      arr.map((inner) => inner.sort()).sort((a, b) => a[0].localeCompare(b[0]));
    expect(sortInner(result)).toEqual(sortInner(expected));
  });

  it("should handle empty strings", () => {
    const strs = ["", "b", ""];
    const expected = [["", ""], ["b"]];
    const result = groupAnagrams(strs);
    const sortInner = (arr: string[][]) =>
      arr
        .map((inner) => inner.sort())
        .sort((a, b) => (a[0] || "").localeCompare(b[0] || ""));
    expect(sortInner(result)).toEqual(sortInner(expected));
  });

  it("should handle single-letter strings", () => {
    const strs = ["a", "b", "a"];
    const expected = [["a", "a"], ["b"]];
    const result = groupAnagrams(strs);
    const sortInner = (arr: string[][]) =>
      arr.map((inner) => inner.sort()).sort((a, b) => a[0].localeCompare(b[0]));
    expect(sortInner(result)).toEqual(sortInner(expected));
  });

  it("should return an empty array for empty input", () => {
    const strs: string[] = [];
    const expected: string[][] = [];
    expect(groupAnagrams(strs)).toEqual(expected);
  });

  it("should return a single group for a single input string", () => {
    const strs = ["hello"];
    const expected = [["hello"]];
    expect(groupAnagrams(strs)).toEqual(expected);
  });

  it("should handle strings with different cases (assuming case-insensitive grouping is NOT required)", () => {
    const strs = ["Eat", "tea", "Tan", "ate", "nat", "bat"];
    // Standard anagram grouping is case-sensitive
    const expected = [["Eat"], ["tea", "ate"], ["Tan"], ["nat"], ["bat"]];
    const result = groupAnagrams(strs);
    const sortInner = (arr: string[][]) =>
      arr.map((inner) => inner.sort()).sort((a, b) => a[0].localeCompare(b[0]));
    expect(sortInner(result)).toEqual(sortInner(expected));
  });

  it("should handle strings with numbers or symbols if required by potential variations", () => {
    const strs = ["a1", "1a", "b2", "2b", "a1"];
    const expected = [
      ["a1", "1a", "a1"],
      ["b2", "2b"],
    ];
    const result = groupAnagrams(strs);
    const sortInner = (arr: string[][]) =>
      arr.map((inner) => inner.sort()).sort((a, b) => a[0].localeCompare(b[0]));
    expect(sortInner(result)).toEqual(sortInner(expected));
  });
});
