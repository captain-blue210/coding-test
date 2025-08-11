class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const processed = s.replace(/[^A-Za-z0-9]/g, '').toLocaleLowerCase();
    let left = 0;
    let right = processed.length - 1;

    while (left <= right) {
      if (processed[left] !== processed[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}
