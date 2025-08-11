import { describe, expect, it } from 'vitest';
import { Solution } from './TwoSum.js';

describe('TwoSum', () => {
  it('should return indices of the two numbers such that they add up to target', () => {
    const solution = new Solution();
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = solution.twoSum(nums, target);
    // The result should contain two indices
    expect(result).toHaveLength(2);
    // The values at these indices should sum to the target
    expect(nums[result[0]] + nums[result[1]]).toBe(target);
    // The indices should be correct, regardless of order
    expect(result.sort((a, b) => a - b)).toEqual([0, 1]);
  });

  it('should handle another case', () => {
    const solution = new Solution();
    const nums = [3, 2, 4];
    const target = 6;
    const result = solution.twoSum(nums, target);
    expect(result).toHaveLength(2);
    expect(nums[result[0]] + nums[result[1]]).toBe(target);
    expect(result.sort((a, b) => a - b)).toEqual([1, 2]);
  });

  it('should handle case with duplicate numbers', () => {
    const solution = new Solution();
    const nums = [3, 3];
    const target = 6;
    const result = solution.twoSum(nums, target);
    expect(result).toHaveLength(2);
    expect(nums[result[0]] + nums[result[1]]).toBe(target);
    expect(result.sort((a, b) => a - b)).toEqual([0, 1]);
  });

  it('should return undefined if no solution is found', () => {
    const solution = new Solution();
    const nums = [1, 2, 3];
    const target = 7;
    const result = solution.twoSum(nums, target);
    expect(result).toBeUndefined();
  });
});
