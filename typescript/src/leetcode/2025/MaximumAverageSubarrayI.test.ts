import { findMaxAverage } from "./MaximumAverageSubarrayI";

describe("findMaxAverage", () => {
  // 基本的なテストケース
  it("長さkの連続部分配列の最大平均値を返す（例1）", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBeCloseTo(12.75, 5);
  });

  it("長さkの連続部分配列の最大平均値を返す（例2）", () => {
    expect(findMaxAverage([5], 1)).toBeCloseTo(5.0, 5);
  });

  // エッジケース
  it("配列の長さがkと等しい場合、その配列の平均値を返す", () => {
    expect(findMaxAverage([1, 2, 3, 4], 4)).toBeCloseTo(2.5, 5);
    expect(findMaxAverage([-1, -2, -3, -4], 4)).toBeCloseTo(-2.5, 5);
  });

  it("配列の要素がすべて同じ値の場合、その値を返す", () => {
    expect(findMaxAverage([7, 7, 7, 7, 7], 3)).toBeCloseTo(7.0, 5);
    expect(findMaxAverage([0, 0, 0, 0], 2)).toBeCloseTo(0.0, 5);
  });

  // 負の数を含むケース
  it("負の数を含む配列の最大平均値を正しく計算する", () => {
    expect(findMaxAverage([-1, 2, 3, -4, 5, -6], 3)).toBeCloseTo(4.0 / 3, 5); // [2, 3, -4] または [3, -4, 5]
  });

  // 追加のテストケース
  it("小数点以下の精度を確認する", () => {
    expect(findMaxAverage([1.5, 2.5, 3.5, 4.5], 2)).toBeCloseTo(4.0, 5); // [3.5, 4.5]
  });

  it("大きな値と小さな値が混在する配列の最大平均値を計算する", () => {
    expect(findMaxAverage([-100, 100, -100, 100], 2)).toBeCloseTo(0.0, 5);
  });

  it("k=1の場合は配列の最大値を返す", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 1)).toBeCloseTo(50.0, 5);
  });

  // LeetCodeの例
  it("LeetCodeの例1", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBeCloseTo(12.75, 5);
  });

  it("LeetCodeの例2", () => {
    expect(findMaxAverage([5], 1)).toBeCloseTo(5.0, 5);
  });
});
