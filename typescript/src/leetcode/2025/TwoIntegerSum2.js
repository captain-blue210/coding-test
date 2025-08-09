class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let right = 1;

    for (let left = 0; left < numbers.length; left++) {
      while (right < numbers.length) {
        console.log(`left: ${numbers[left]}, right: ${numbers[right]}`);
        if (numbers[left] + numbers[right] === target) {
          return [left + 1, right + 1];
        } else {
          right++;
        }
      }
      right = left + 1;
    }
  }
}
