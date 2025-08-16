class Solution {
  backTrack(open, close, n, res, stack) {
    if (open === close && open === n) {
      res.push(stack);
      return;
    }

    if (open < n) {
      this.backTrack(open + 1, close, n, res, stack + '(');
    }

    if (open > close) {
      this.backTrack(open, close + 1, n, res, stack + ')');
    }
  }

  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    const res = [];
    this.backTrack(0, 0, n, res, '');
    return res;
  }
}
