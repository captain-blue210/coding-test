import { tribonacci } from "./N-thTribonacciNumber";

describe("tribonacci", () => {
  it("should return 0 when n = 0", () => {
    expect(tribonacci(0)).toBe(0);
  });

  it("should return 1 when n = 1", () => {
    expect(tribonacci(1)).toBe(1);
  });

  it("should return 1 when n = 2", () => {
    expect(tribonacci(2)).toBe(1);
  });

  it("should return 2 when n = 3", () => {
    expect(tribonacci(3)).toBe(2);
  });

  it("should return 4 when n = 4", () => {
    expect(tribonacci(4)).toBe(4);
  });

  it("should return 1389537 when n = 25", () => {
    expect(tribonacci(25)).toBe(1389537);
  });

  it("should return 615693474 when n = 35", () => {
    expect(tribonacci(35)).toBe(615693474);
  });
});
