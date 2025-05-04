export function mergeAlternately(word1: string, word2: string): string {
  let result = "";
  let maxIndex = 0;
  let rest = "";
  if (word1.length < word2.length) {
    rest = word2.slice(word1.length);
    maxIndex = word1.length * 2;
  } else if (word1.length > word2.length) {
    rest = word1.slice(word2.length);
    maxIndex = word2.length * 2;
  } else {
    maxIndex = word1.length + word2.length;
  }

  let w1Index = 0;
  let w2Index = 0;
  while (w1Index + w2Index < maxIndex) {
    if ((w1Index + w2Index) % 2 === 0) {
      result += word1[w1Index];
      w1Index++;
    } else {
      result += word2[w2Index];
      w2Index++;
    }
  }
  return rest ? result + rest : result;
}
