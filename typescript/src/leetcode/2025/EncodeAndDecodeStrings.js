class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = '';
    if (strs.length === 0) {
      return '';
    }
    for (const str of strs) {
      res += str.length + '#' + str;
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    if (str === '') return [];

    let res = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== '#') {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      i = j + 1;
      j = i + length;
      res.push(str.substring(i, j));
      i = j;
    }
    return res;
  }
}

export { Solution };
