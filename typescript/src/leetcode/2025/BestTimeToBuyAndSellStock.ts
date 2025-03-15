export function maxProfit(prices: number[]): number {
  // o(n)

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentProfit = prices[i] - minPrice;
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, currentProfit);
  }
  return maxProfit;
}
