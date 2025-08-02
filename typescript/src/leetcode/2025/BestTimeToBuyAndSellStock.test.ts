import { maxProfit } from './BestTimeToBuyAndSellStock';

describe('Best Time to Buy and Sell Stock tests', () => {
  test('should return 0 when [0] is given', () => {
    const given: number[] = [0];
    expect(maxProfit(given)).toBe(0);
  });

  test('should return 5 when [7,1,5,3,6,4] is given', () => {
    const given: number[] = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(given)).toBe(5);
  });

  test('should return 0 when [7,6,4,3,1] is given', () => {
    const given: number[] = [7, 6, 4, 3, 1];
    expect(maxProfit(given)).toBe(0);
  });

  test('should return 1 when [1,2] is given', () => {
    const given: number[] = [1, 2];
    expect(maxProfit(given)).toBe(1);
  });
});
