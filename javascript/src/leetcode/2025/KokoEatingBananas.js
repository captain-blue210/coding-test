class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);

    while (left <= right) {
      const k = Math.floor(left + (right - left) / 2);

      let totalTime = 0;
      for (const p of piles) {
        totalTime += Math.ceil(p / k);
      }

      if (totalTime <= h) {
        right = k - 1;
      } else {
        left = k + 1;
      }
    }
    return left;
  }
}
