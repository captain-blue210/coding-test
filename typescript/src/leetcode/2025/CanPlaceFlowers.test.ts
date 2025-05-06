import { canPlaceFlowers } from "./CanPlaceFlowers";

describe("canPlaceFlowers", () => {
  // 基本的なテストケース
  it("空の花壇に花を植えられる", () => {
    expect(canPlaceFlowers([], 0)).toBe(true);
  });

  it("n=0の場合は常にtrueを返す", () => {
    expect(canPlaceFlowers([1, 0, 1], 0)).toBe(true);
    expect(canPlaceFlowers([0, 0, 0], 0)).toBe(true);
  });

  // 花を植えることができるケース
  it("すべて空の花壇に1本植えられる", () => {
    expect(canPlaceFlowers([0, 0, 0], 1)).toBe(true);
  });

  it("端が空いている花壇に1本植えられる", () => {
    expect(canPlaceFlowers([0, 1, 0, 0], 1)).toBe(true);
    expect(canPlaceFlowers([0, 0, 1, 0], 1)).toBe(true);
  });

  it("既に花がある花壇の空きスペースに植えられる", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
  });

  it("長い花壇に複数の花を植えられる", () => {
    expect(canPlaceFlowers([0, 0, 0, 0, 0], 2)).toBe(true);
    expect(canPlaceFlowers([0, 0, 0, 0, 0, 0, 0], 3)).toBe(true);
  });

  it("1つの要素だけの花壇に植えられる", () => {
    expect(canPlaceFlowers([0], 1)).toBe(true);
  });

  // 花を植えられないケース
  it("すべて埋まっている花壇には植えられない", () => {
    expect(canPlaceFlowers([1, 1, 1], 1)).toBe(false);
  });

  it("空きが足りない花壇には植えられない", () => {
    expect(canPlaceFlowers([0, 0, 0], 3)).toBe(false);
    expect(canPlaceFlowers([1, 0, 0, 1], 1)).toBe(false);
  });

  it("3つの空きスペースに2本植えられる", () => {
    expect(canPlaceFlowers([0, 0, 0], 2)).toBe(true);
  });

  it("隣接ルールにより植えられない", () => {
    expect(canPlaceFlowers([1, 0, 1], 1)).toBe(false);
    expect(canPlaceFlowers([0, 1, 0], 1)).toBe(false);
  });

  it("長い花壇でも要求数が多すぎると植えられない", () => {
    expect(canPlaceFlowers([0, 0, 0, 0, 0, 0, 0], 5)).toBe(false);
  });

  it("7つの空きスペースに4本植えられる", () => {
    expect(canPlaceFlowers([0, 0, 0, 0, 0, 0, 0], 4)).toBe(true);
  });

  // エッジケース
  it("端の特殊ケース", () => {
    expect(canPlaceFlowers([0, 0], 1)).toBe(true);
    expect(canPlaceFlowers([0, 0, 0, 0], 2)).toBe(true);
  });

  // LeetCodeの例
  it("LeetCodeの例1", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
  });

  it("LeetCodeの例2", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
  });
});
