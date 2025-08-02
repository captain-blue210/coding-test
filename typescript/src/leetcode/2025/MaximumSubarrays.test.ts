import { maxSubArray } from './MaximumSubarray';

describe('MaxiumSubarray test', () => {
  test('should return 1', () => {
    expect(maxSubArray([1])).toBe(1);
  });

  test('should return 6', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test('should return 0', () => {
    expect(maxSubArray([0, 0])).toBe(0);
  });
});
