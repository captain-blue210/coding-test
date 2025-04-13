import { isValid } from "../src/leetcode/2025/ValidParenthesis";

describe("Valid Parentheses", () => {
  test("Empty string returns true", () => {
    expect(isValid("")).toBe(true);
  });

  test('"()" returns true', () => {
    expect(isValid("()")).toBe(true);
  });

  test('"()[]{}" returns true', () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  test('"(]" returns false', () => {
    expect(isValid("(]")).toBe(false);
  });

  test('"([)]" returns false', () => {
    expect(isValid("([)]")).toBe(false);
  });

  test('"{[]}" returns true', () => {
    expect(isValid("{[]}")).toBe(true);
  });
});
