import { guessNumber } from "./GuessNumberHigherOrLower";

// グローバルに guess 関数をモック定義
let secret: number;

(globalThis as any).guess = (num: number): number => {
  if (num === secret) return 0;
  return num > secret ? -1 : 1;
};

describe("guessNumber", () => {
  test.each([
    { n: 10, pick: 6 },
    { n: 1, pick: 1 },
    { n: 100, pick: 1 },
    { n: 100, pick: 100 },
    { n: 2126753390, pick: 1702766719 }, // LeetCodeにある大きな数字の例
  ])("n = $n, secret = $pick", ({ n, pick }) => {
    secret = pick;
    expect(guessNumber(n)).toBe(pick);
  });
});
