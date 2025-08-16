class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let min = 0;
    let max = nums.length - 1;

    while (min <= max) {
      let mid = Math.floor((min + max) / 2);
      if (nums[mid] < target) {
        min = mid + 1;
        mid = Math.floor((max - min) / 2);
      } else if (target < nums[mid]) {
        max = mid - 1;
        mid = Math.floor((max - min) / 2);
      } else {
        return mid;
      }
    }
    return -1;
  }
}
