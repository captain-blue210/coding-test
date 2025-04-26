import { describe, expect, it } from "vitest";
import { removeElement } from "./RemoveElement";

describe("removeElement", () => {
  const testCases = [
    {
      name: "Example 1",
      nums: [3, 2, 2, 3],
      val: 3,
      expectedNums: [2, 2],
      expectedCount: 2,
    },
    {
      name: "Example 2",
      nums: [0, 1, 2, 2, 3, 0, 4, 2],
      val: 2,
      expectedNums: [0, 1, 3, 0, 4], // 順不同OK
      expectedCount: 5,
    },
    {
      name: "Empty array",
      nums: [],
      val: 0,
      expectedNums: [],
      expectedCount: 0,
    },
    {
      name: "All elements removed",
      nums: [1, 1, 1, 1],
      val: 1,
      expectedNums: [],
      expectedCount: 0,
    },
    {
      name: "No elements removed",
      nums: [4, 5],
      val: 3,
      expectedNums: [4, 5],
      expectedCount: 2,
    },
  ];

  it.each(testCases)("$name", ({ nums, val, expectedNums, expectedCount }) => {
    const numsCopy = [...nums]; // 破壊されるのでコピー
    const resultCount = removeElement(numsCopy, val);
    const resultNums = numsCopy.slice(0, resultCount).sort((a, b) => a - b);
    const expectedSorted = [...expectedNums].sort((a, b) => a - b);

    expect(resultCount).toBe(expectedCount);
    expect(resultNums).toEqual(expectedSorted);
  });
});
