export function lengthOfLongestSubstring(s: string): number {
  let maxLength: number = 0;
  let lastSeenChars: Map<string, number> = new Map();

  let start: number = 0;
  for (let end = 0; end < s.length; end++) {
    const target: string = s.charAt(end);

    if (lastSeenChars.has(target) && lastSeenChars.get(target)! >= start) {
      start = lastSeenChars.get(target)! + 1;
    }

    maxLength = Math.max(maxLength, end - start + 1);
    lastSeenChars.set(target, end);
  }
  return maxLength;
}
