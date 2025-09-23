class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    // s1の文字列をcount
    const s1CountMap = new Map();
    for (const c of s1) {
      s1CountMap.set(c, s1CountMap.get(c) + 1 || 1);
    }

    const windowLength = s1.length;
    let result = false;
    for (let i = 0; i <= s2.length - windowLength; i++) {
      const sub = s2.slice(i, i + windowLength);
      const subCountMap = new Map();
      for (const c of sub) {
        subCountMap.set(c, subCountMap.get(c) + 1 || 1);
      }
      // s1の文字列のcountとsliding window内の文字列のcountが同じかどうか
      if (s1CountMap.size != subCountMap.size) continue;

      let isEqual = true;
      for (const key of s1CountMap.keys()) {
        if (subCountMap.get(key) !== s1CountMap.get(key)) {
          isEqual = false;
          break;
        }
      }

      if (isEqual) {
        result = true;
        break;
      }
    }
    return result;
  }
}
