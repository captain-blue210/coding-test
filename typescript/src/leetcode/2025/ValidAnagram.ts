export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let charCountMap: Map<string, number> = new Map();
  for (const char of s) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!charCountMap.has(char) || charCountMap.get(char)! == 0) {
      return false;
    }
    charCountMap.set(char, charCountMap.get(char)! - 1);
  }
  return true;
}
