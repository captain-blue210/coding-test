class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const stack = [0];
    const res = Array(temperatures.length).fill(0);

    for (let i = 1; i < temperatures.length; i++) {
      while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
        res[stack[stack.length - 1]] = i - stack[stack.length - 1];
        stack.pop();
      }
      stack.push(i);
    }
    return res;
  }
}
