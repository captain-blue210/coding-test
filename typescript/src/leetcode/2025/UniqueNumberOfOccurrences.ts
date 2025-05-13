export function uniqueOccurrences(arr: number[]): boolean {
  const countMap: Map<number, number> = new Map();

  for (const num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  const unique = new Set([...countMap.values()]);
  return unique.size === countMap.size;
}
