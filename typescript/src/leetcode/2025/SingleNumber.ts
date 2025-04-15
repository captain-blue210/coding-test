export function singleNumber(nums: number[]): number {
  const countMap: Map<number, number> = new Map();

  for (const num of nums) {
    if (countMap.has(num)) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    } else {
      countMap.set(num, 1);
    }
  }

  console.log(countMap);

  return Array.from(countMap.entries())
    .filter(([_, value]) => value === 1)
    .map(([key]) => key)[0];
}
