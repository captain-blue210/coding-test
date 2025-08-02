export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sCountMap: Map<string, number> = new Map();
  const tCountMap: Map<string, number> = new Map();

  for (let i = 0; i < s.length; i++) {
    sCountMap.set(s[i], (sCountMap.get(s[i]) || 0) + 1);
    tCountMap.set(t[i], (tCountMap.get(t[i]) || 0) + 1);
  }

  for (const key of sCountMap.keys()) {
    if (sCountMap.get(key) !== tCountMap.get(key)) {
      return false;
    }
  }
  return true;
}
