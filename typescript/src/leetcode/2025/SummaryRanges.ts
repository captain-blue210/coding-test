export function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [`${nums[0]}`];

  const result: string[] = [];
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    // 次の要素が連続していない、または配列の末尾に到達した場合
    if (i + 1 === nums.length || nums[i] + 1 !== nums[i + 1]) {
      if (start === i) {
        // 単独の要素の場合
        result.push(`${nums[start]}`);
      } else {
        // 範囲として要約
        result.push(`${nums[start]}->${nums[i]}`);
      }
      // 次の範囲のスタートを更新
      start = i + 1;
    }
  }

  return result;
}
