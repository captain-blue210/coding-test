export function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [`${nums[0]}`];

  const result: string[] = [];

  let left = 0;
  let temp = [];
  while (left < nums.length) {
    if (nums[left] + 1 === nums[left + 1]) {
      temp.push(`${nums[left]}`);
    } else {
      temp.push(nums[left]);
      const summary =
        temp.length === 1
          ? `${temp[0]}`
          : `${temp[0]}->${temp[temp.length - 1]}`;
      result.push(summary);
      temp = [];
    }
    left++;
  }
  return result;
}
