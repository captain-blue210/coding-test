export function isValidSudoku(board: string[][]): boolean {
  const rows: Set<string>[] = Array(9)
    .fill(0)
    .map(() => new Set());
  const cols: Set<string>[] = Array(9)
    .fill(0)
    .map(() => new Set());
  const subBoxes: Set<string>[] = Array(9)
    .fill(0)
    .map(() => new Set());

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const val = board[row][col];
      if (val === ".") continue;

      const subBoxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (
        rows[row].has(val) ||
        cols[col].has(val) ||
        subBoxes[subBoxIndex].has(val)
      ) {
        return false;
      }

      rows[row].add(val);
      cols[col].add(val);
      subBoxes[subBoxIndex].add(val);
    }
  }
  return true;
}
