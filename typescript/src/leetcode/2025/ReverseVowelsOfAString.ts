export function reverseVowels(s: string): string {
  const vowels: string[] = ["a", "i", "u", "e", "o"];

  const vowelIndices = [];
  // 母音のある位置を記録
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s.charAt(i).toLowerCase())) {
      vowelIndices.push(i);
    }
  }

  // 最初と後ろから母音を入れ替える
  const chars = s.split("");
  let left = 0;
  let right = vowelIndices.length - 1;
  while (left < right) {
    chars.splice(vowelIndices[left], 1, s.charAt(vowelIndices[right]));
    chars.splice(vowelIndices[right], 1, s.charAt(vowelIndices[left]));

    left++;
    right--;
  }
  return chars.join("");
}
