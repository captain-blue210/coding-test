class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    let pair = position.map((p, i) => [p, speed[i]]);
    pair.sort((a, b) => b[0] - a[0]);
    let stack = [];
    for (const [pos, speed] of pair) {
      const time = (target - pos) / speed;
      if (stack.length === 0 || stack[stack.length - 1] < time) {
        stack.push(time);
      }
    }
    return stack.length;
  }
}
