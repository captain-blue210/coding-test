class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    const flatted = matrix.flat();
    console.log(flatted);

    let min = 0;
    let max = flatted.length - 1;

    while (min <= max) {
      let mid = this.calcMid(min, max);
      if (target === flatted[mid]) {
        return true;
      }
      if (target < flatted[mid]) {
        max = mid - 1;
        mid = this.calcMid(min, max);
      }
      if (target > flatted[mid]) {
        min = mid + 1;
        mid = this.calcMid(min, max);
      }
    }
    return false;
  }

  calcMid(left, right) {
    return Math.floor(left + (right - left) / 2);
  }
}
