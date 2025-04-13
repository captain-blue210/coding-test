import { maxArea } from "../src/leetcode/2025/ContainerWithMostAreaBruteForce";

describe("Container with most Area tests", () => {
  it("should return 49 when [1,8,6,2,5,4,8,3,7] is given", () => {
    const given: number[] = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    expect(maxArea(given)).toBe(49);
  });

  it("should return 1 when [1,1] is given", () => {
    const given: number[] = [1, 1];
    expect(maxArea(given)).toBe(1);
  });
});
