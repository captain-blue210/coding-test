function isValid(s: string): boolean {
  let stack: string[] = [];

  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let bracket of s) {
    // 閉じ括弧の場合はstackの一番上をチェック
    if (bracket in brackets) {
      if (!!stack && stack.pop() !== brackets[bracket]) {
        // 対応する括弧がなければfalse
        return false;
      }
    } else {
      // 一致しない場合は積む
      stack.push(bracket);
    }
  }
  return stack.length === 0;
}
