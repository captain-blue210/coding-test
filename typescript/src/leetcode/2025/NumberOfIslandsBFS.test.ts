import { describe, expect, it } from "vitest";
import { numIslands } from "./NumberOfIslandsBFS";

describe("Number of Islands", () => {
  it("should return 1 when there is one island", () => {
    const grid = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    expect(numIslands(grid)).toBe(1);
  });

  it("should return 3 when there are three islands", () => {
    const grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    expect(numIslands(grid)).toBe(3);
  });

  it("should return 0 when there are no islands (all water)", () => {
    const grid = [
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    expect(numIslands(grid)).toBe(0);
  });

  it("should return 1 when the grid is a single land cell", () => {
    const grid = [["1"]];
    expect(numIslands(grid)).toBe(1);
  });

  it("should return 0 when the grid is a single water cell", () => {
    const grid = [["0"]];
    expect(numIslands(grid)).toBe(0);
  });

  it("should handle complex island shapes", () => {
    const grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "0", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "1", "1", "1"],
    ];
    expect(numIslands(grid)).toBe(2);
  });

  it("should handle grid with multiple small islands", () => {
    const grid = [
      ["1", "0", "1", "0", "1"],
      ["0", "1", "0", "1", "0"],
      ["1", "0", "1", "0", "1"],
      ["0", "1", "0", "1", "0"],
    ];
    expect(numIslands(grid)).toBe(10);
  });
});
