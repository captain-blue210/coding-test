import { RecentCounter } from "./NumberOfRecentCalls";

describe("RecentCounter", () => {
  it("初期化テスト：クラスが正しく初期化されること", () => {
    const counter = new RecentCounter();
    // 初期状態では内部キューが空なので、特に検証するものはない
    expect(counter).toBeInstanceOf(RecentCounter);
  });

  it("単一の ping テスト：1回の ping で正しく 1 が返ること", () => {
    const counter = new RecentCounter();
    expect(counter.ping(1)).toBe(1);
  });

  it("複数の ping テスト：複数回の ping で正しいカウントが返ること", () => {
    const counter = new RecentCounter();
    expect(counter.ping(1)).toBe(1);
    expect(counter.ping(100)).toBe(2);
    expect(counter.ping(3001)).toBe(3);
  });

  it("3000ms 以上経過したケース：古い ping が削除されること", () => {
    const counter = new RecentCounter();
    expect(counter.ping(1)).toBe(1);
    expect(counter.ping(3002)).toBe(1); // 最初の ping は範囲外（t - 3000 = 2）
  });

  it("境界値テスト：ちょうど 3000ms の差がある場合", () => {
    const counter = new RecentCounter();
    expect(counter.ping(1)).toBe(1);
    expect(counter.ping(3001)).toBe(2); // 最初の ping は範囲内（t - 3000 = 1）
  });

  it("連続して多数の ping を行うケース", () => {
    const counter = new RecentCounter();
    expect(counter.ping(1)).toBe(1);
    expect(counter.ping(100)).toBe(2);
    expect(counter.ping(3001)).toBe(3);
    expect(counter.ping(3002)).toBe(3);
    expect(counter.ping(7000)).toBe(1); // 7000 - 3000 = 4000, 3001と3002は範囲外
  });

  it("3000ms境界付近の複数のpingテスト", () => {
    const counter = new RecentCounter();
    expect(counter.ping(1)).toBe(1);
    expect(counter.ping(2)).toBe(2);
    expect(counter.ping(3)).toBe(3);
    expect(counter.ping(3002)).toBe(2); // 1は範囲外(3002-3000=2)なので削除され、2と3のみ残る
  });
});

it("LeetCode テストケース: [[],[642],[1849],[4921],[5936],[5957]]", () => {
  const counter = new RecentCounter();
  expect(counter.ping(642)).toBe(1);
  expect(counter.ping(1849)).toBe(2);
  expect(counter.ping(4921)).toBe(1);
  expect(counter.ping(5936)).toBe(2); // 4921, 5936 は範囲内、642 は範囲外（5936-3000=2936）
  expect(counter.ping(5957)).toBe(3); // 4921, 5936, 5957 は範囲内、642, 1849 は範囲外（5957-3000=2957）
});
