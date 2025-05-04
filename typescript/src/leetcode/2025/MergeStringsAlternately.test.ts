import { mergeAlternately } from "./MergeStringsAlternately";

describe("Merge Strings Alternately", () => {
  // ケース1: 両方の文字列の長さが同じ場合
  it("両方の文字列の長さが同じ場合", () => {
    expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
    expect(mergeAlternately("", "")).toBe("");
    expect(mergeAlternately("a", "z")).toBe("az");
  });

  // ケース2: word1よりword2の方が長い場合
  it("word1よりword2の方が長い場合", () => {
    expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
    expect(mergeAlternately("a", "xyz")).toBe("axyz");
    expect(mergeAlternately("", "abc")).toBe("abc");
  });

  // ケース3: word1の方がword2より長い場合
  it("word1の方がword2より長い場合", () => {
    expect(mergeAlternately("abcd", "pq")).toBe("apbqcd");
    expect(mergeAlternately("xyz", "a")).toBe("xayz");
    expect(mergeAlternately("abc", "")).toBe("abc");
  });

  // 制約テスト: 文字列の長さが制限内であることを確認
  it("制約: 文字列の長さが100以下", () => {
    const longWord1 = "a".repeat(100);
    const longWord2 = "b".repeat(100);
    const result = mergeAlternately(longWord1, longWord2);

    expect(result.length).toBe(200);
    expect(result[0]).toBe("a");
    expect(result[1]).toBe("b");
    expect(result[198]).toBe("a");
    expect(result[199]).toBe("b");
  });
});
