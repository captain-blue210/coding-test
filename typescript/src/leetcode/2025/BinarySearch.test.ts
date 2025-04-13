import { search } from "../src/leetcode/2025/BinarySearch";

describe("Binary Search Tests", () => {
  it("should return 4 given [-1,0,3,5,9,12], taget 9", () => {
    const given: number[] = [-1, 0, 3, 5, 9, 12];
    const target: number = 9;
    expect(search(given, target)).toBe(4);
  });

  it("should return 4 given [-1,0,3,5,9,12], taget 2", () => {
    const given: number[] = [-1, 0, 3, 5, 9, 12];
    const target: number = 2;
    expect(search(given, target)).toBe(-1);
  });
});
