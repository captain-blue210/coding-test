import { describe, expect, it } from "vitest";
import { moveZeroes } from "./MoveZeros";

describe("moveZeroes (parameterized)", () => {
  it.each([
    { input: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
    { input: [0, 0, 0, 0], expected: [0, 0, 0, 0] },
    { input: [1, 2, 3, 4], expected: [1, 2, 3, 4] },
    { input: [1, 2, 3, 0], expected: [1, 2, 3, 0] },
    { input: [0, 1, 0, 2, 0, 3], expected: [1, 2, 3, 0, 0, 0] },
    { input: [0, 0, 0, 1, 2], expected: [1, 2, 0, 0, 0] },
    { input: [0], expected: [0] },
    { input: [5], expected: [5] },
    { input: [], expected: [] },
  ])("should move zeroes for $input", ({ input, expected }) => {
    moveZeroes(input);
    expect(input).toEqual(expected);
  });
});
