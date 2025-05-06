export function kidsWithCandies(
  candies: number[],
  extraCandies: number
): boolean[] {
  // candyの最大値を取得
  const max = Math.max(...candies);

  // extraCandiesを足して、最大値と比較して結果を配列に記録
  return candies.map((num) => num + extraCandies >= max);
}
