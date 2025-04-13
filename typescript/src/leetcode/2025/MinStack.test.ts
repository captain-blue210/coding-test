import { MinStack } from "../src/leetcode/2025/MinStack";

describe("MinStack", () => {
  it("should initialize an empty stack", () => {
    const minStack = new MinStack();
    expect(() => minStack.pop()).not.toThrow(); // 空スタックでのpopでエラーが出ないことを確認
  });

  it("should handle basic operations", () => {
    const minStack = new MinStack();

    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);

    // 最小値が-3であることを確認
    console.table(minStack);
    expect(minStack.getMin()).toBe(-3);

    // -3をpopして、topが0になることを確認
    minStack.pop();
    expect(minStack.top()).toBe(0);

    // popした後の最小値が-2になることを確認
    console.table(minStack);
    expect(minStack.getMin()).toBe(-2);
  });

  it("should handle duplicate values", () => {
    const minStack = new MinStack();

    minStack.push(1);
    minStack.push(1);

    // 最小値が1であることを確認
    expect(minStack.getMin()).toBe(1);

    // 1つpopしても最小値は1のままであることを確認
    minStack.pop();
    expect(minStack.getMin()).toBe(1);
  });

  it("should handle a sequence of operations", () => {
    const minStack = new MinStack();

    minStack.push(5);
    expect(minStack.top()).toBe(5);
    expect(minStack.getMin()).toBe(5);

    minStack.push(3);
    expect(minStack.top()).toBe(3);
    expect(minStack.getMin()).toBe(3);

    minStack.push(7);
    expect(minStack.top()).toBe(7);
    expect(minStack.getMin()).toBe(3);

    minStack.pop();
    expect(minStack.top()).toBe(3);
    expect(minStack.getMin()).toBe(3);

    minStack.pop();
    expect(minStack.top()).toBe(5);
    expect(minStack.getMin()).toBe(5);
  });

  it("should handle edge cases with negative numbers", () => {
    const minStack = new MinStack();

    minStack.push(-10);
    minStack.push(-5);
    minStack.push(-20);

    expect(minStack.getMin()).toBe(-20);

    minStack.pop();
    expect(minStack.getMin()).toBe(-10);
  });
});
