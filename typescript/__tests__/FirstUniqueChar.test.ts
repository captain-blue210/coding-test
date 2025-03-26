// src/__tests__/firstUniqChar.test.ts
import { describe, expect, it } from "vitest";
import { firstUniqChar } from "../src/leetcode/2025/FirstUniqueChar";

describe("First Unique Character in a String", () => {
  it('文字列 "leetcode" の最初の一意文字のインデックスは 0', () => {
    expect(firstUniqChar("leetcode")).toBe(0);
  });

  it('文字列 "loveleetcode" の最初の一意文字のインデックスは 2', () => {
    expect(firstUniqChar("loveleetcode")).toBe(2);
  });

  it('文字列 "aabb" には一意文字がないので -1 を返す', () => {
    expect(firstUniqChar("aabb")).toBe(-1);
  });

  //   it("空文字列の場合は -1 を返す", () => {
  //     expect(firstUniqChar("")).toBe(-1);
  //   });

  it("一文字だけの文字列の場合はインデックス 0 を返す", () => {
    expect(firstUniqChar("a")).toBe(0);
  });

  it("全ての文字が重複している場合は -1 を返す", () => {
    expect(firstUniqChar("aaaaaa")).toBe(-1);
  });

  it("大文字と小文字は区別する（大文字小文字を混合した文字列）", () => {
    expect(firstUniqChar("aA")).toBe(0);
  });

  it("特殊文字や数字を含む文字列も処理できる", () => {
    expect(firstUniqChar("a1b2c3d!a")).toBe(1);
  });

  it("最後の文字が一意の場合も正しく処理できる", () => {
    expect(firstUniqChar("aabbc")).toBe(4);
  });
});
