import { isAnagram } from "../src/leetcode/2025/ValidAnagram";

describe("Valid Anagram tests", () => {
  it('should return true when s = "anagram", t = "nagaram" is given', () => {
    const s: string = "anagram";
    const t: string = "nagaram";

    expect(isAnagram(s, t)).toBeTruthy();
  });

  it('should return true when s = "rat", t = "car" is given', () => {
    const s: string = "rat";
    const t: string = "car";

    expect(isAnagram(s, t)).toBeFalsy();
  });

  it('should return true when s = "a", t = "a" is given', () => {
    const s: string = "a";
    const t: string = "a";

    expect(isAnagram(s, t)).toBeTruthy();
  });

  it('should return true when s = "ab", t = "a" is given', () => {
    const s: string = "ab";
    const t: string = "a";

    expect(isAnagram(s, t)).toBeFalsy();
  });
});
