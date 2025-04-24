export function numIslands(grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  function bfs(startRow: number, startCol: number): void {
    const queue: [number, number][] = [[startRow, startCol]];
    grid[startRow][startCol] = "2";

    while (queue.length > 0) {
      const [row, col] = queue.shift()!;
      const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ];

      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;
        if (
          newRow >= 0 &&
          newCol >= 0 &&
          newRow < rows &&
          newCol < cols &&
          grid[newRow][newCol] === "1"
        ) {
          console.log(grid);

          grid[newRow][newCol] = "2";
          queue.push([row + dr, col + dc]);
        }
      }
    }
  }

  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        count++;
        bfs(i, j);
      }
    }
  }
  return count;
}
