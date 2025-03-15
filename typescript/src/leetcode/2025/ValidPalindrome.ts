export function isPalindrome(s: string): boolean {
  // remove all non-alphanumeric chars
  const convertedString: string = s.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();

  // 先頭と末尾から順番に文字が一致するか確認する
  let startIndex = 0;
  let endIndex = convertedString.length - 1;
  while (startIndex < endIndex) {
    if (
      convertedString.charAt(startIndex) !== convertedString.charAt(endIndex)
    ) {
      return false;
    }
    startIndex++;
    endIndex--;
  }

  return true;
}
