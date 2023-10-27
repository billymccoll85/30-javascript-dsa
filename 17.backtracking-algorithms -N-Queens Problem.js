function solveNQueens(n) {
    const board = new Array(n).fill().map(() => new Array(n).fill('.'));
    const result = [];
  
    function backtrack(row) {
      if (row === n) {
        result.push(board.map(row => row.join('')));
        return;
      }
  
      for (let col = 0; col < n; col++) {
        if (isValid(row, col)) {
          board[row][col] = 'Q';
          backtrack(row + 1);
          board[row][col] = '.';
        }
      }
    }
  
    function isValid(row, col) {
      for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') {
          return false;
        }
        const j = row - i;
        if (col - j >= 0 && board[i][col - j] === 'Q') {
          return false;
        }
        if (col + j < n && board[i][col + j] === 'Q') {
          return false;
        }
      }
      return true;
    }
  
    backtrack(0);
  
    return result;
  }