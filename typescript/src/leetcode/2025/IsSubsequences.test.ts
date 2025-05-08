import { isSubsequence } from "./IsSubsequences";

describe("isSubsequence", () => {
  // 基本的なテストケース
  it("空文字列sは任意の文字列tの部分列である", () => {
    expect(isSubsequence("", "ahbgdc")).toBe(true);
  });

  it("同一文字列の場合は部分列である", () => {
    expect(isSubsequence("abc", "abc")).toBe(true);
  });

  // 部分列であるケース
  it("LeetCodeの例1: 'abc'は'ahbgdc'の部分列である", () => {
    expect(isSubsequence("abc", "ahbgdc")).toBe(true);
  });

  it("文字が連続していなくても順序が保持されていれば部分列である", () => {
    expect(isSubsequence("ace", "abcde")).toBe(true);
    expect(isSubsequence("aec", "abcdefgec")).toBe(true);
  });

  it("1文字の場合も部分列判定ができる", () => {
    expect(isSubsequence("a", "abc")).toBe(true);
    expect(isSubsequence("c", "abc")).toBe(true);
  });

  // 部分列でないケース
  it("LeetCodeの例2: 'axc'は'ahbgdc'の部分列ではない", () => {
    expect(isSubsequence("axc", "ahbgdc")).toBe(false);
  });

  it("sがtより長い場合は部分列ではない", () => {
    expect(isSubsequence("abcdef", "abc")).toBe(false);
  });

  it("文字の順序が異なる場合は部分列ではない", () => {
    expect(isSubsequence("ba", "ab")).toBe(false);
    expect(isSubsequence("aec", "abcde")).toBe(false);
  });

  // エッジケース
  it("両方とも空文字列の場合は部分列である", () => {
    expect(isSubsequence("", "")).toBe(true);
  });

  it("tが空文字列でsが空でない場合は部分列ではない", () => {
    expect(isSubsequence("a", "")).toBe(false);
  });

  it("重複文字を含む場合も正しく判定できる", () => {
    expect(isSubsequence("aaa", "aaa")).toBe(true);
    expect(isSubsequence("aaa", "aaaaa")).toBe(true);
    expect(isSubsequence("aab", "aaabb")).toBe(true);
    expect(isSubsequence("aab", "aabaa")).toBe(true);
  });
});
