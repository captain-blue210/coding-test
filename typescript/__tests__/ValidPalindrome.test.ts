import { isPalindrome } from "../src/leetcode/2025/ValidPalindrome";

describe("Valid Palindrome tests", () => {
  test("should return true when palindrome is given", () => {
    const given: string = "A man, a plan, a canal: Panama";
    expect(isPalindrome(given)).toBeTruthy();
  });

  test("should return false when not palindrome is given", () => {
    const given: string = "race a car";
    expect(isPalindrome(given)).toBeFalsy();
  });

  test("should return true when a space is given", () => {
    const given: string = " ";
    expect(isPalindrome(given)).toBeTruthy();
  });

  test("should return true when # is given", () => {
    const given: string = "#";
    expect(isPalindrome(given)).toBeTruthy();
  });
});
