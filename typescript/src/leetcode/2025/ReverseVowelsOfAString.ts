export function reverseVowels(s: string): string {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  const chars = s.split("");
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !vowels.has(chars[left].toLowerCase())) left++;
    while (left < right && !vowels.has(chars[right].toLowerCase())) right--;

    // 左右の母音を入れ替える
    [chars[left], chars[right]] = [chars[right], chars[left]];

    left++;
    right--;
  }
  return chars.join("");
}
