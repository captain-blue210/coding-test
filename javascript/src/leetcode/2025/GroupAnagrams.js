class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const checkedMap = new Map();
    for (const word of strs) {
      const sorted = word.split('').sort().join('');
      if (!checkedMap.has(sorted)) {
        checkedMap.set(sorted, []);
      }
      checkedMap.get(sorted).push(word);
    }
    return [...checkedMap.values()];
  }
}

export { Solution };
