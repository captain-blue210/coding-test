export function largestAltitude(gain: number[]): number {
  let maxAltitude = 0;

  let currentAltitude = 0;
  for (const elm of gain) {
    currentAltitude += elm;
    maxAltitude = Math.max(maxAltitude, currentAltitude);
  }

  return maxAltitude;
}
