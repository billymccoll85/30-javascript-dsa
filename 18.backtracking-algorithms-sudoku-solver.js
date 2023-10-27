function solveSudoku(board) {
    function backtrack(row, col) {
      if (row === 9) {
        return true;
      }
  
      const nextRow = col === 8 ? row + 1 : row;
      const nextCol = col === 8 ? 0 : col + 1;
  
      if (board[row][col] !== '.') {
        return backtrack(nextRow, nextCol);
      }
  
      for (let num = 1; num <= 9; num++) {
        const char = String(num);
        if (isValid(row, col, char)) {
          board[row][col] = char;
          if (backtrack(nextRow, nextCol)) {
            return true;
          }
          board[row][col] = '.';
        }
      }
  
      return false;
    }
  
    function isValid(row, col, char) {
      for (let i = 0; i < 9; i++) {
        if (board[row][i] === char || board[i][col] === char) {
          return false;
        }
        const boxRow = Math.floor(row / 3) * 3 + Math.floor(i / 3);
        const boxCol = Math.floor(col / 3) * 3 + (i % 3);
        if (board[boxRow][boxCol] === char) {
          return false;
        }
      }
      return true;
    }
  
    backtrack(0, 0);
  
    return board;
  }