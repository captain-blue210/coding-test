export function majorityElement(nums: number[]): number {
  const halfNum = Math.floor(nums.length / 2);
  const countMap: Map<number, number> = new Map();

  for (const num of nums) {
    if (countMap.has(num)) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    } else {
      countMap.set(num, 1);
    }
  }

  return Array.from(countMap.entries())
    .filter(([_, count]) => count > halfNum)
    .map(([num]) => num)[0];
}
