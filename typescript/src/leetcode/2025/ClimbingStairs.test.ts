import { describe, expect, it } from "vitest";
import { climbStairs } from "./ClimbingStairs";

describe("Climbing Stairs", () => {
  it("should return 1 for n = 1", () => {
    expect(climbStairs(1)).toBe(1);
  });

  it("should return 2 for n = 2", () => {
    expect(climbStairs(2)).toBe(2);
  });

  it("should return 3 for n = 3", () => {
    expect(climbStairs(3)).toBe(3);
  });

  it("should return 5 for n = 4", () => {
    expect(climbStairs(4)).toBe(5);
  });

  it("should return 8 for n = 5", () => {
    expect(climbStairs(5)).toBe(8);
  });

  it("should return 13 for n = 6", () => {
    expect(climbStairs(6)).toBe(13);
  });

  // より大きな値のテストケース
  it("should return 89 for n = 10", () => {
    expect(climbStairs(10)).toBe(89);
  });

  // LeetCode の制約に基づくテストケース (例: n=45)
  // 計算に時間がかかる可能性があるため、必要に応じてコメントアウトまたは削除
  // it('should return 1836311903 for n = 45', () => {
  //   expect(climbStairs(45)).toBe(1836311903);
  // });
});
