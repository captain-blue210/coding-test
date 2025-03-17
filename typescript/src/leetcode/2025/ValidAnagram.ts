export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let charCountMap: Map<string, number> = new Map();

  for (const char of s) {
    if (charCountMap.has(char)) {
      charCountMap.set(char, charCountMap.get(char)! + 1);
    } else {
      charCountMap.set(char, 1);
    }
  }

  for (const char of t) {
    if (charCountMap.get(char)! > 0) {
      charCountMap.set(char, charCountMap.get(char)! - 1);
    } else {
      return false;
    }
  }
  return true;
}
