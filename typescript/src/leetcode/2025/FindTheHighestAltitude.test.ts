import { largestAltitude } from "./FindTheHighestAltitude";

describe("Find The Highest Altitude", () => {
  it("should return 1", () => {
    expect(largestAltitude([-5, 1, 5, 0, -7])).toBe(1);
  });

  it("should return 0", () => {
    expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toBe(0);
  });

  it("should return 0", () => {
    expect(largestAltitude([-100, 100])).toBe(0);
  });
});
