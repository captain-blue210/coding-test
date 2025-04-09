export function dailyTemperatures(temperatures: number[]): number[] {
  // 結果を格納する配列
  let result = Array(temperatures.length).fill(0);

  for (let index = 0; index < temperatures.length; index++) {
    let rightIndex = index + 1;
    const temperature = temperatures[index];
    while (rightIndex <= temperatures.length - 1) {
      if (temperature < temperatures[rightIndex]) {
        result[index] = rightIndex - index;
        break;
      }
      rightIndex++;
    }
  }
  return result;
}
