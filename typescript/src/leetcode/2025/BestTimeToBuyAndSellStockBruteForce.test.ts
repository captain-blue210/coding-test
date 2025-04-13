import { maxProfit } from "../src/leetcode/2025/BestTimeToBuyAndSellStockBruteForce";

describe("Best Time to Buy and Sell Stock tests", () => {
  test("should return 0 when [0] is given", () => {
    const given: number[] = [0];
    expect(maxProfit(given)).toBe(0);
  });

  test("should return 5 when [7,1,5,3,6,4] is given", () => {
    const given: number[] = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(given)).toBe(5);
  });
});
