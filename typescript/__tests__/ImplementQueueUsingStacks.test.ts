import { beforeEach, describe, expect, it } from "vitest";
import { MyQueue } from "../src/leetcode/2025/ImplementQueueUsingStacks";

describe("MyQueue: スタックを用いたキューの実装", () => {
  let myQueue: MyQueue;

  // 各テストケースの前に、新しいMyQueueインスタンスを作成
  beforeEach(() => {
    myQueue = new MyQueue();
  });

  it("テストケース1: 初期状態ではキューは空であるべき", () => {
    // empty() メソッドが true を返すことを確認
    expect(myQueue.empty()).toBe(true);
  });

  it("テストケース2: push操作後にキューは空ではなくなるべき", () => {
    // 要素を1つpushした後、empty() が false になることを確認
    myQueue.push(1);
    expect(myQueue.empty()).toBe(false);
    // さらに要素をpushしても、empty() は false のままであることを確認
    myQueue.push(2);
    expect(myQueue.empty()).toBe(false);
  });

  it("テストケース3: peek操作は先頭要素を削除せずに返す", () => {
    myQueue.push(1);
    myQueue.push(2);
    // 最初のpeek() は先頭の 1 を返す
    expect(myQueue.peek()).toBe(1);
    // 再度peek() を呼び出しても、同じく先頭の 1 を返す（削除されていないことの確認）
    expect(myQueue.peek()).toBe(1);
    // peek() 後もキューは空ではない
    expect(myQueue.empty()).toBe(false);
  });

  it("テストケース4: pop操作はFIFO（先入れ先出し）順で要素を削除して返す", () => {
    myQueue.push(1); // キュー: [1]
    myQueue.push(2); // キュー: [1, 2]
    myQueue.push(3); // キュー: [1, 2, 3]

    // 最初のpop() は 1 を返す
    expect(myQueue.pop()).toBe(1); // キュー: [2, 3]
    // 次のpeek() は 2 を返す
    expect(myQueue.peek()).toBe(2);
    // 次のpop() は 2 を返す
    expect(myQueue.pop()).toBe(2); // キュー: [3]
    // 次のpeek() は 3 を返す
    expect(myQueue.peek()).toBe(3);
    // 最後のpop() は 3 を返す
    expect(myQueue.pop()).toBe(3); // キュー: []
    // 全ての要素をpopした後、キューは空になる
    expect(myQueue.empty()).toBe(true);
  });

  it("テストケース5: 空のキューに対するpeek操作の挙動 (LeetCode制約外)", () => {
    // LeetCodeの制約「All the calls to pop and peek are valid」により、
    // 実際のLeetCode提出時にはこのケースは発生しない想定。
    // 実装によってはエラーを投げるか、null/undefined等を返す可能性がある。
    // ここでは undefined を返す実装を想定。
    expect(myQueue.peek()).toBeUndefined();
  });

  it("テストケース6: 空のキューに対するpop操作の挙動 (LeetCode制約外)", () => {
    // LeetCodeの制約「All the calls to pop and peek are valid」により、
    // 実際のLeetCode提出時にはこのケースは発生しない想定。
    // 実装によってはエラーを投げるか、null/undefined等を返す可能性がある。
    // ここでは undefined を返す実装を想定。
    expect(myQueue.pop()).toBeUndefined();
  });

  it("テストケース7: emptyステータスが正しく更新されるか", () => {
    // 初期状態は空
    expect(myQueue.empty()).toBe(true);
    // push後、空ではない
    myQueue.push(1);
    expect(myQueue.empty()).toBe(false);
    // pop後、再び空になる
    myQueue.pop();
    expect(myQueue.empty()).toBe(true);
  });

  it("テストケース8: LeetCode Example 1 の操作シーケンス", () => {
    // MyQueue myQueue = new MyQueue(); (beforeEachで実行済み)
    // myQueue.push(1);
    myQueue.push(1); // キュー: [1]
    // myQueue.push(2);
    myQueue.push(2); // キュー: [1, 2]
    // myQueue.peek(); // return 1
    expect(myQueue.peek()).toBe(1);
    // myQueue.pop(); // return 1
    expect(myQueue.pop()).toBe(1); // キュー: [2]
    // myQueue.empty(); // return false
    expect(myQueue.empty()).toBe(false);
    // 追加確認: pop後のpeek
    expect(myQueue.peek()).toBe(2);
    // 追加確認: 最後の要素をpop
    expect(myQueue.pop()).toBe(2); // キュー: []
    // 追加確認: 最終的に空になるか
    expect(myQueue.empty()).toBe(true);
  });

  it("テストケース9: 連続したpushとpopの組み合わせ", () => {
    myQueue.push(1); // [1]
    myQueue.push(2); // [1, 2]
    expect(myQueue.pop()).toBe(1); // [2]
    myQueue.push(3); // [2, 3]
    myQueue.push(4); // [2, 3, 4]
    expect(myQueue.peek()).toBe(2);
    expect(myQueue.pop()).toBe(2); // [3, 4]
    expect(myQueue.pop()).toBe(3); // [4]
    expect(myQueue.empty()).toBe(false);
    expect(myQueue.pop()).toBe(4); // []
    expect(myQueue.empty()).toBe(true);
  });
});
