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
      s1CountMap.set(c, (s1CountMap.get(c) || 0) + 1);
    }

    const diff = new Map(s1CountMap);

    const adjust = (map, key, diff) => {
      const v = (map.get(key) || 0) + diff;
      if (v === 0) map.delete(key);
      else map.set(key, v);
    };

    for (let i = 0; i < s1.length; i++) {
      adjust(diff, s2[i], -1);
    }
    if (diff.size === 0) return true;

    // windowの右端がs2の末尾にくるまで動かす
    for (let r = s1.length; r < s2.length; r++) {
      const inChar = s2[r];
      const outChar = s2[r - s1.length];

      adjust(diff, inChar, -1);
      adjust(diff, outChar, +1);

      if (diff.size === 0) return true;
    }
    return false;
  }
}
