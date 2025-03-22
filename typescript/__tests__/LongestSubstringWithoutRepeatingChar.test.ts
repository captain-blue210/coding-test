import { lengthOfLongestSubstring } from "../src/leetcode/2025/LongestSubstringWithoutRepeatingChar";

describe("lengthOfLongestSubstring", () => {
  it('should return 3 when "abcabcbb" is given', () => {
    const given: string = "abcabcbb";
    expect(lengthOfLongestSubstring(given)).toBe(3);
  });

  it('should return 1 when "bbbbb" is given', () => {
    const given: string = "bbbbb";
    expect(lengthOfLongestSubstring(given)).toBe(1);
  });

  it('should return 3 when "pwwkew" is given', () => {
    const given: string = "pwwkew";
    expect(lengthOfLongestSubstring(given)).toBe(3);
  });

  it('should return 2 when "abba" is given', () => {
    const given: string = "abba";
    expect(lengthOfLongestSubstring(given)).toBe(2);
  });
});
