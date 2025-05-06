import { kidsWithCandies } from "./KidsWithGreatestNumberOfCandies";

describe("kidsWithCandies", () => {
  // 基本ケース（最大値が1つ）
  it("should handle case with one maximum value", () => {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([
      true,
      true,
      true,
      false,
      true,
    ]);
  });

  // 複数の子供が最大値を持つケース
  it("should handle case with multiple maximum values", () => {
    expect(kidsWithCandies([4, 2, 1, 1, 2, 4], 1)).toEqual([
      true,
      false,
      false,
      false,
      false,
      true,
    ]);
  });

  // 配列サイズの境界値（n=2）
  it("should handle minimum array size (n=2)", () => {
    expect(kidsWithCandies([2, 4], 2)).toEqual([true, true]);
  });

  // 配列サイズの境界値（n=100）
  it("should handle maximum array size (n=100)", () => {
    const candies = Array(99).fill(1).concat([100]);
    const expected = Array(99).fill(false).concat([true]);
    expect(kidsWithCandies(candies, 50)).toEqual(expected);
  });

  // 全ての子供が同じキャンディー数を持つ場合
  it("should handle case where all kids have the same number of candies", () => {
    expect(kidsWithCandies([5, 5, 5, 5], 1)).toEqual([true, true, true, true]);
  });

  // extraCandiesの最小値（1）の場合
  it("should handle minimum extraCandies value (1)", () => {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 1)).toEqual([
      false,
      false,
      true,
      false,
      false,
    ]);
  });

  // extraCandiesの最大値（50）の場合
  it("should handle maximum extraCandies value (50)", () => {
    expect(kidsWithCandies([50, 1, 1, 10], 50)).toEqual([
      true,
      true,
      true,
      true,
    ]);
  });

  // キャンディー数の差が大きく、extraCandiesを加えても最大値に届かないケース
  it("should handle case where difference is too large to reach maximum", () => {
    expect(kidsWithCandies([1, 10, 100], 50)).toEqual([false, false, true]);
  });

  // キャンディー数の最小値（1）の場合
  it("should handle minimum candies value (1)", () => {
    expect(kidsWithCandies([1, 1, 1], 1)).toEqual([true, true, true]);
  });

  // キャンディー数の最大値（100）の場合
  it("should handle maximum candies value (100)", () => {
    expect(kidsWithCandies([100, 1], 2)).toEqual([true, false]);
  });

  // 最大値との差がちょうどextraCandiesと同じケース
  it("should handle edge case where difference equals extraCandies", () => {
    expect(kidsWithCandies([2, 7, 4, 1, 6], 5)).toEqual([
      true,
      true,
      true,
      false,
      true,
    ]);
  });

  // 最大値との差がextraCandiesより1小さいケース
  it("should handle edge case where difference is 1 less than extraCandies", () => {
    expect(kidsWithCandies([4, 10, 5], 5)).toEqual([false, true, true]);
  });
});
