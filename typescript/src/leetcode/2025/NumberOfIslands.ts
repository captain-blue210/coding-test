export function numIslands(grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(row: number, col: number): void {
    // 範囲外、海の場合はなにもしない
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] !== "1"
    ) {
      return;
    }

    // 1だったら、2(探索済み)とする
    grid[row][col] = "2";

    // 上下左右をチェックする
    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  }

  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
}
