export function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  // DP用の配列を用意
  const dp: number[] = Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    // i番目の家までで得られる最大金額
    // i番目の家で盗むか盗まないか、それぞれのパターンで大きい方を選択
    // i-2 + nums[i] -> i番目の家から盗む
    // i-1 -> i番目の家から盗まない
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  // 最後の要素に最大金額が入る
  return dp[nums.length - 1];
}
