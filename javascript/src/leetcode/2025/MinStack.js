class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  // stack;
  // minStack;

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    if (
      this.minStack.length > 0 &&
      this.minStack[this.minStack.length - 1] >= val
    ) {
      this.minStack.push(val);
    }
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    }
  }

  /**
   * @return {void}
   */
  pop() {
    const val = this.stack.pop();
    if (
      this.minStack.length > 0 &&
      this.minStack[this.minStack.length - 1] === val
    ) {
      this.minStack.pop();
    }
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    console.log(this.minStack);
    return this.minStack.length > 0
      ? this.minStack[this.minStack.length - 1]
      : null;
  }
}
