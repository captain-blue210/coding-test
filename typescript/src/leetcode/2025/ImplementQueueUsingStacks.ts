export class MyQueue {
  private inputStack: Array<number>;
  private outputStack: Array<number>;

  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  push(x: number): void {
    this.inputStack.push(x);
    console.log(`input: ${this.inputStack}`);
  }

  pop(): number {
    this.moveToOutputStack();
    return this.outputStack.pop();
  }

  peek(): number {
    this.moveToOutputStack();
    return this.outputStack[this.outputStack.length - 1];
  }

  empty(): boolean {
    return this.inputStack.length === 0 && this.outputStack.length === 0;
  }

  private moveToOutputStack() {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
  }
}
