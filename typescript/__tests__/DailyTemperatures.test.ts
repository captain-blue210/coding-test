import { dailyTemperatures } from "../src/leetcode/2025/DailyTemperatures";

describe("dailyTemperatures", () => {
  it("should return [1,1,4,2,1,1,0,0] when [73,74,75,71,69,72,76,73] is given", () => {
    const given = [73, 74, 75, 71, 69, 72, 76, 73];
    expect(dailyTemperatures(given)).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });

  it("should return [1,1,1,0] when [30,40,50,60] is given", () => {
    const given = [30, 40, 50, 60];
    expect(dailyTemperatures(given)).toEqual([1, 1, 1, 0]);
  });

  it("should return");
});
