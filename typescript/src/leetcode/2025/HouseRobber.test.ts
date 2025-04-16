import { rob } from "./HouseRobber";

describe("House Robber", () => {
  test("空の配列の場合は0を返す", () => {
    expect(rob([])).toBe(0);
  });

  test("要素が1つの配列の場合はその要素の値を返す", () => {
    expect(rob([1])).toBe(1);
    expect(rob([5])).toBe(5);
    expect(rob([100])).toBe(100);
  });

  test("要素が2つの配列の場合は大きい方の値を返す", () => {
    expect(rob([1, 2])).toBe(2);
    expect(rob([5, 3])).toBe(5);
    expect(rob([10, 20])).toBe(20);
  });

  test("LeetCodeの例題1: [1,2,3,1] -> 4", () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
  });

  test("LeetCodeの例題2: [2,7,9,3,1] -> 12", () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
  });

  test("連続した大きな値がある場合", () => {
    expect(rob([2, 1, 1, 2])).toBe(4);
  });

  test("交互に盗むのが最適ではない場合", () => {
    expect(rob([4, 1, 2, 7, 5, 3, 1])).toBe(14); // 4 + 2 + 5 + 3
  });

  test("大きな配列の場合", () => {
    expect(rob([6, 3, 10, 8, 2, 10, 3, 5, 10, 5, 3])).toBe(39);
  });
});
