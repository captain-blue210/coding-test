import { uniqueOccurrences } from "./UniqueNumberOfOccurrences";

describe("uniqueOccurrences", () => {
  it("すべての出現回数がユニークな場合", () => {
    expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBe(true);
  });

  it("出現回数が重複している場合", () => {
    expect(uniqueOccurrences([1, 2])).toBe(false);
  });

  it("すべて同じ値で構成される場合（1回の出現のみ）", () => {
    expect(uniqueOccurrences([1, 1, 1, 1])).toBe(true);
  });

  it("空配列の場合", () => {
    expect(uniqueOccurrences([])).toBe(true); // 出現数ゼロなのでユニークとみなす
  });

  it("ユニークな数字だけど出現回数がすべて同じ場合", () => {
    expect(uniqueOccurrences([1, 2, 3, 4])).toBe(false); // 全て1回ずつ
  });

  it("負の数が含まれていても動作するか", () => {
    expect(uniqueOccurrences([1, -1, -1, 2, 2, 2])).toBe(true); // 出現数: 1, 2, 3
  });
});
