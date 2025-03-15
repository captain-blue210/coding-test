export function maxProfit(prices: number[]): number {
  // 総当たりバージョン
  let maxProfit = 0;
  for (let buyDay = 0; buyDay < prices.length - 1; buyDay++) {
    for (let sellDay = buyDay + 1; sellDay < prices.length; sellDay++) {
      console.log(sellDay);
      console.log(buyDay);
      if (prices[buyDay] < prices[sellDay]) {
        maxProfit = Math.max(maxProfit, prices[sellDay] - prices[buyDay]);
      }
    }
  }
  return maxProfit;
}
