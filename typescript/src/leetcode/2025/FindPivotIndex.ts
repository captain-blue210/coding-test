export function pivotIndex(nums: number[]): number {
  for (let index = 0; index < nums.length; index++) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    let leftSome = 0;
    let rightSome = 0;

    while (leftIndex < index) {
      leftSome += nums[leftIndex];
      leftIndex++;
    }

    while (rightIndex > index) {
      rightSome += nums[rightIndex];
      rightIndex--;
    }

    if (leftSome === rightSome) {
      return index;
    }
  }
  return -1;
}
