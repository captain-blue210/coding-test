export function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  // 2ポインタのために昇順にソート
  nums.sort((a, b) => a - b);

  // 3つのうち、1つめを固定するループ
  for (let index = 0; index < nums.length - 2; index++) {
    if (index > 0 && nums[index] == nums[index - 1]) continue;

    let left = index + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[index] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[index], nums[left], nums[right]]);

        // 重複するパターンをスキップ
        while (left < right && nums[left] == nums[left + 1]) left++;
        while (left < right && nums[right] == nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
}
