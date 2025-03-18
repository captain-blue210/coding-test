export function maxArea(height: number[]): number {
  let maxArea: number = 0;
  let left: number = 0;
  let right: number = height.length - 1;

  while (left < right) {
    const h: number = Math.min(height[right], height[left]);
    const w: number = right - left;
    maxArea = Math.max(maxArea, h * w);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
