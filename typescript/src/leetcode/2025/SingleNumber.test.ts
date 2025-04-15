import { singleNumber } from "./SingleNumber";

describe("Single Number", () => {
  test("基本的なケース: [2,2,1] → 1", () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });

  test("別の基本的なケース: [4,1,2,1,2] → 4", () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });

  test("単一要素のケース: [1] → 1", () => {
    expect(singleNumber([1])).toBe(1);
  });

  test("負の数を含むケース: [-1,2,-1] → 2", () => {
    expect(singleNumber([-1, 2, -1])).toBe(2);
  });

  test("大きな数値を含むケース: [1,2,1,2,4294967296] → 4294967296", () => {
    expect(singleNumber([1, 2, 1, 2, 4294967296])).toBe(4294967296);
  });

  test("ゼロを含むケース: [0,1,0] → 1", () => {
    expect(singleNumber([0, 1, 0])).toBe(1);
  });
});
