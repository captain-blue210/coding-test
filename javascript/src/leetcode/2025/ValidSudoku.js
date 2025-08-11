class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rows = new Map();
    const cols = new Map();
    const squares = new Map();

    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        const cell = board[r][c];
        const squareKey = `${Math.floor(r / 3)}_${Math.floor(c / 3)}`;
        if (cell === '.') continue;

        if (
          (rows.get(r) && rows.get(r).has(cell)) ||
          (cols.get(c) && cols.get(c).has(cell)) ||
          (squares.get(squareKey) && squares.get(squareKey).has(cell))
        ) {
          return false;
        }

        if (!rows.get(r)) rows.set(r, new Set());
        if (!cols.get(c)) cols.set(c, new Set());
        if (!squares.get(squareKey)) squares.set(squareKey, new Set());

        rows.get(r).add(r, cell);
        cols.get(c).add(c.cell);
        squares.get(squareKey).add(squareKey);
      }
    }
    return true;
  }
}
