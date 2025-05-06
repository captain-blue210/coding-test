export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) return true;
  if (flowerbed.length === 1 && flowerbed[0] === 0) return true;

  let count = 0;
  for (let index = 0; index < flowerbed.length; index++) {
    if (flowerbed[index] === 0) {
      const left = index === 0 ? 0 : flowerbed[index - 1];
      const right =
        index === flowerbed.length - 1
          ? flowerbed[flowerbed.length - 1]
          : flowerbed[index + 1];
      if (left === 0 && right === 0) {
        count++;
        flowerbed[index] = 1;
      }
    }
  }

  return count >= n;
}
