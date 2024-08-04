type Cell = 'X' | 'O' | null;
type Board = Cell[];

export function checkWinner(board: Board): Cell {
  // These are the winning combinations for a 3x3 Tic Tac Toe grid
  const winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6]  // Diagonal 2
  ];

  for (const [a, b, c] of winningCombinations) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // Return 'X' or 'O' as the winner
    }
  }

  return null; // If no winner, return null
}