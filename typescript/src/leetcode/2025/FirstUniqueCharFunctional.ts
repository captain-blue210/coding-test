export function firstUniqChar(s: string): number {
  const count = [...s].reduce((acc, char) => {
    acc.set(char, (acc.get(char) ?? 0) + 1);
    return acc;
  }, new Map<string, number>());

  // カウントが1の最初の文字のindexを返す
  const firstUniqueChar = [...count].find(([_, value]) => value === 1)?.[0];
  return firstUniqueChar !== undefined ? s.indexOf(firstUniqueChar) : -1;
}
