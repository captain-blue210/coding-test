import { eraseOverlapIntervals } from "./NonOverlappingIntervals";

describe("Non-Overlapping Intervals", () => {
  it("should remove one interval when there is one overlapping interval", () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [2, 3],
        [1, 3],
      ])
    ).toBe(1);
  });

  it("should remove two intervals when there are three identical intervals", () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [1, 2],
        [1, 2],
      ])
    ).toBe(2);
  });

  it("should return 0 when there are no overlapping intervals", () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
    ).toBe(0);
  });

  it("should handle complex overlapping patterns", () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
      ])
    ).toBe(1);
  });

  it("should handle intervals with large values within constraints", () => {
    expect(
      eraseOverlapIntervals([
        [10000, 20000],
        [15000, 25000],
        [20000, 30000],
        [30000, 40000],
      ])
    ).toBe(1);
  });

  it("should handle unsorted intervals", () => {
    expect(
      eraseOverlapIntervals([
        [3, 4],
        [1, 2],
        [2, 3],
        [1, 3],
      ])
    ).toBe(1);
  });
});
