export function maxArea(height: number[]): number {
  let maxArea: number = 0;

  for (let i = 0; i < height.length - 1; i++) {
    for (let j = 1; j < height.length; j++) {
      const h: number = Math.min(height[i], height[j]);
      const w: number = j - i;
      maxArea = Math.max(maxArea, h * w);
    }
  }

  return maxArea;
}
