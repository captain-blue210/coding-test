import { describe, expect, it } from "vitest";
import { majorityElement } from "./MajorityElement"; // Updated path

describe("majorityElement", () => {
  it("should return the majority element for [3,2,3]", () => {
    const nums = [3, 2, 3];
    expect(majorityElement(nums)).toBe(3);
  });

  it("should return the majority element for [2,2,1,1,1,2,2]", () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    expect(majorityElement(nums)).toBe(2);
  });

  it("should return the majority element when it appears at the beginning", () => {
    const nums = [1, 1, 1, 2, 3];
    expect(majorityElement(nums)).toBe(1);
  });

  it("should return the majority element when it appears at the end", () => {
    const nums = [2, 3, 4, 4, 4];
    expect(majorityElement(nums)).toBe(4);
  });

  it("should handle an array with a single element", () => {
    const nums = [1];
    expect(majorityElement(nums)).toBe(1);
  });

  it("should handle an array with two identical elements", () => {
    const nums = [5, 5];
    expect(majorityElement(nums)).toBe(5);
  });
});
