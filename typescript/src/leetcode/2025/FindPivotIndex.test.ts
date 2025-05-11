import { pivotIndex } from "./FindPivotIndex";

describe("Find Pivot Index", () => {
  it.each([
    { input: [1, 7, 3, 6, 5, 6], expected: 3 },
    { input: [2, 1, -1], expected: 0 },
    { input: [1, -1, 2], expected: 2 },
    { input: [1, 2, 3], expected: -1 },
  ])("should return pivot index if it exists", ({ input, expected }) => {
    expect(pivotIndex(input)).toBe(expected);
  });
});
