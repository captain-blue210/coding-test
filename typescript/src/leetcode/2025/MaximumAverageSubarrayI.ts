export function findMaxAverage(nums: number[], k: number): number {
  let first = 0;
  let last = k - 1;
  let maxAverage = Number.NEGATIVE_INFINITY;

  while (last < nums.length) {
    let sum = 0;
    for (let i = first; i <= last; i++) {
      sum += nums[i];
    }

    maxAverage = Math.max(maxAverage, sum / k);
    first++;
    last++;
  }

  return maxAverage;
}
