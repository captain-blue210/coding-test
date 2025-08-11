class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const bracketPairs = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
    const stack = [];

    for (const char of s.split('')) {
      if (bracketPairs[char]) {
        if (
          stack.length > 0 &&
          stack[stack.length - 1] === bracketPairs[char]
        ) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(char);
      }
    }
    return stack.length === 0;
  }
}
