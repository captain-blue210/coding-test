export function productExceptSelf(nums: number[]): number[] {
  const result = Array(nums.length).fill(1);

  let leftProduct = 1;
  for (let index = 0; index < nums.length; index++) {
    result[index] = leftProduct;
    leftProduct *= nums[index];
  }

  let rightProduct = 1;
  for (let index = nums.length - 1; index >= 0; index--) {
    result[index] *= rightProduct;
    rightProduct *= nums[index];
  }

  return result.map(num => (num === -0 ? 0 : num));
}
