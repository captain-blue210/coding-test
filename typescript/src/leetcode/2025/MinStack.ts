export class MinStack {
  private stack: Array<number>;
  private minStack: Array<number>;

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);

    // 最小値の更新チェック
    if (
      this.minStack.length === 0 ||
      this.minStack[this.minStack.length - 1] >= val
    ) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    if (
      this.stack[this.stack.length - 1] ===
      this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.pop();
    }
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
