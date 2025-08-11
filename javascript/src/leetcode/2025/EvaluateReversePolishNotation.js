class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const operands = new Set(['+', '-', '*', '/']);
    let stack = [];

    for (const s of tokens) {
      if (operands.has(s)) {
        console.log(stack);
        const second = stack.pop();
        const first = stack.pop();
        if (s === '+') {
          stack.push(first + second);
        } else if (s === '-') {
          stack.push(first - second);
        } else if (s === '*') {
          stack.push(first * second);
        } else if (s === '/') {
          stack.push(Math.trunc(first / second));
        }
      } else {
        stack.push(parseInt(s));
      }
    }
    return stack.pop();
  }
}
