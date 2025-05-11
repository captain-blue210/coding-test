export function pivotIndex(nums: number[]): number {
  // 全体の合計を計算
  const sum = nums.reduce((sum, current) => (sum += current), 0);

  // 合計からleftSomeとcurrentIndexの値を引いてrightSomeとする
  let leftSome = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSome === sum - leftSome - nums[i]) {
      return i;
    }
    leftSome += nums[i];
  }
  return -1;
}
