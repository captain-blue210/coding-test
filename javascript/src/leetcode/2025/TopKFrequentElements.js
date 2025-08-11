class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const count = {};
    const freqArry = Array.from({ length: nums.length + 1 }, () => []);

    for (const num of nums) {
      count[num] = (count[num] || 0) + 1;
    }

    for (const num in count) {
      freqArry[count[num]].push(parseInt(num));
    }

    const res = [];
    for (const i = freqArry.length - 1; i > 0; i--) {
      for (const n of freqArry[i]) {
        res.push(n);
        if (res.length === k) {
          return res;
        }
      }
    }
  }
}

export { Solution };
