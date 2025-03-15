export function maxProfit(prices: number[]): number {
  // o(n)

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    const currentProfit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, currentProfit);
  }
  return maxProfit;
}
