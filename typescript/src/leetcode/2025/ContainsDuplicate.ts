export class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums: number[]) {
    const set = new Set(nums);

    if (set.size !== nums.length) {
      return true;
    }
    return false;
  }
}
