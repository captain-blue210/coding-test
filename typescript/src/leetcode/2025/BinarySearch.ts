export function search(nums: number[], target: number): number {
  let start: number = 0;
  let end: number = nums.length - 1;

  while (start <= end) {
    let mid: number = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}
