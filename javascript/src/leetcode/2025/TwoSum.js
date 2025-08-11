class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const checkedMap = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (checkedMap.has(complement)) {
        return [i, checkedMap.get(complement)];
      }
      checkedMap.set(nums[i], i);
    }
  }
}

export { Solution };
