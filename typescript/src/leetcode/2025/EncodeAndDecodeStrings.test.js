import { Solution } from './EncodeAndDecodeStrings';

describe('Solution', () => {
  const solution = new Solution();

  describe('encode', () => {
    it('should encode an empty array', () => {
      const strs = [];
      const expected = '';
      expect(solution.encode(strs)).toBe(expected);
    });

    it('should encode an array with a single string', () => {
      const strs = ['hello'];
      const expected = '5#hello';
      expect(solution.encode(strs)).toBe(expected);
    });

    it('should encode an array with multiple strings', () => {
      const strs = ['hello', 'world'];
      const expected = '5#hello5#world';
      expect(solution.encode(strs)).toBe(expected);
    });

    it('should encode an array with an empty string', () => {
      const strs = ['hello', '', 'world'];
      const expected = '5#hello0#5#world';
      expect(solution.encode(strs)).toBe(expected);
    });
  });
});
