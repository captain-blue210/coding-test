export function groupAnagrams(strs: string[]): string[][] {
  const groupAnagrams: Map<string, string[]> = new Map();

  // 配列をループして文字をソートする
  for (const str of strs) {
    const sortedStr = str.split("").sort().join();

    if (groupAnagrams.has(sortedStr)) {
      groupAnagrams.set(sortedStr, [...groupAnagrams.get(sortedStr)!, str]);
    } else {
      groupAnagrams.set(sortedStr, [str]);
    }
  }

  return Array.from(groupAnagrams.values());
}
