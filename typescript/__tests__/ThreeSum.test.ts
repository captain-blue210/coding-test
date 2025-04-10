import { threeSum } from "../src/leetcode/2025/ThreeSum";

describe("ThreeSum", () => {
  it("should return [[-1,-1,2],[-1,0,1]] when [-1,0,1,2,-1,-4] given", () => {
    const given = [-1, 0, 1, 2, -1, -4];
    expect(threeSum(given)).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  it("shoudl return [] when [0,1,1] given", () => {
    const given = [0, 1, 1];
    expect(threeSum(given)).toEqual([]);
  });

  it("shoudl return [0,0,0] when [0,0,0] given", () => {
    const given = [0, 0, 0];
    expect(threeSum(given)).toEqual([[0, 0, 0]]);
  });
});
