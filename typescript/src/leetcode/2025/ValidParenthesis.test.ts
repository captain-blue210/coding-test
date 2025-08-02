import { isValid } from './ValidParenthesis';

describe('Valid Parentheses', () => {
  test('Empty string returns true', () => {
    expect(isValid('')).toBe(true);
  });

  test('"()" returns true', () => {
    expect(isValid('()')).toBe(true);
  });

  test('"()[]{}" returns true', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  test('"(]" returns false', () => {
    expect(isValid('(]')).toBe(false);
  });

  test('"([)]" returns false', () => {
    expect(isValid('([)]')).toBe(false);
  });

  test('"{[]}" returns true', () => {
    expect(isValid('{[]}')).toBe(true);
  });
});
