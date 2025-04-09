export function dailyTemperatures(temperatures: number[]): number[] {
  // 結果を格納する配列
  let result = Array(temperatures.length).fill(0);
  let stack: number[] = [];

  for (let index = 0; index < temperatures.length; index++) {
    const currentTemp = temperatures[index];

    while (
      stack.length > 0 &&
      currentTemp > temperatures[stack[stack.length - 1]]
    ) {
      const topIndex = stack.pop()!;
      result[topIndex] = index - topIndex;
    }
    stack.push(index);
  }
  return result;
}
