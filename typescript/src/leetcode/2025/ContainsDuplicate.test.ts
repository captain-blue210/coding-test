import { describe, expect, it } from 'vitest';
import { Solution } from './ContainsDuplicate';

describe('ContainsDuplicate', () => {
  const solution = new Solution();

  it('should return false for an array with no duplicates', () => {
    const nums = [1, 2, 3, 4];
    expect(solution.hasDuplicate(nums)).toBe(false);
  });

  it('should return true for an array with duplicates', () => {
    const nums = [1, 2, 3, 1];
    expect(solution.hasDuplicate(nums)).toBe(true);
  });

  it('should return false for an empty array', () => {
    const nums: number[] = [];
    expect(solution.hasDuplicate(nums)).toBe(false);
  });

  it('should return false for an array with a single element', () => {
    const nums = [1];
    expect(solution.hasDuplicate(nums)).toBe(false);
  });
});
