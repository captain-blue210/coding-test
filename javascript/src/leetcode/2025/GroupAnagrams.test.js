import { describe, expect, it } from 'vitest';
import { Solution } from './GroupAnagrams.js';

describe('GroupAnagrams', () => {
  const solution = new Solution();

  /**
   * @param {string[][]} arr
   * @returns {string[][]}
   */
  const sortResult = arr => {
    return arr
      .map(inner => inner.sort())
      .sort(
        (a, b) => a.length - b.length || (a[0] ?? '').localeCompare(b[0] ?? '')
      );
  };

  it('should group basic anagrams', () => {
    const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const result = solution.groupAnagrams(strs);
    const expected = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];
    expect(sortResult(result)).toEqual(sortResult(expected));
  });

  it('should return an empty array for an empty input array', () => {
    /** @type {string[]} */
    const strs = [];
    /** @type {string[][]} */
    const expected = [];
    expect(solution.groupAnagrams(strs)).toEqual(expected);
  });

  it('should return an array with a single group for a single word', () => {
    const strs = ['a'];
    const expected = [['a']];
    expect(solution.groupAnagrams(strs)).toEqual(expected);
  });

  it('should return separate groups for words that are not anagrams', () => {
    const strs = ['abc', 'def', 'ghi'];
    const result = solution.groupAnagrams(strs);
    const expected = [['abc'], ['def'], ['ghi']];
    expect(sortResult(result)).toEqual(sortResult(expected));
  });

  it('should handle words with different cases if the logic were case-insensitive (current logic is case-sensitive)', () => {
    const strs = ['Eat', 'tea', 'Tan', 'ate', 'nat', 'bat'];
    const result = solution.groupAnagrams(strs);
    // Current implementation is case-sensitive, so "Eat" and "ate" are not grouped.
    const expected = [['Eat'], ['tea', 'ate'], ['Tan'], ['nat'], ['bat']];
    expect(sortResult(result).map(g => g.join(','))).toEqual(
      sortResult(expected).map(g => g.join(','))
    );
  });
});
