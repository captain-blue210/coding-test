export function maxSubArray(nums: number[]): number {
  let currentSum: number = nums[0];
  let maxSum: number = nums[0];

  // reduceでもできる？
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
