export function removeElement(nums: number[], val: number): number {
  if (nums.length === 0) return 0;

  // index iより前にはvalと同じ値は存在しないこと
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
}
