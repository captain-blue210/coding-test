export function firstUniqChar(s: string): number {
  let checkedMap: Map<string, number> = new Map();

  for (const char of s) {
    checkedMap.set(char, (checkedMap.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (checkedMap.get(s.charAt(i)) == 1) {
      return i;
    }
  }
  return -1;
}
