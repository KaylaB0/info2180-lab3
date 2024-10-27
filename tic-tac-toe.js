document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    let currentPlayer = "X";
    const gameState = Array(9).fill(null);
  
    // Layout the board by adding the class "square" to each square
    squares.forEach(square => {
      square.classList.add("square");
  
      // Add click event to alternate between X and O
      square.addEventListener("click", () => {
        const index = Array.from(squares).indexOf(square);
        if (!gameState[index] && !checkWinner()) {  // Allow if square is empty and no winner yet
          gameState[index] = currentPlayer;
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);
  
          // Check for a winner
          if (!checkWinner()) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";  // Switch player
          }
        }
      });
  
      // Add hover effect
      square.addEventListener("mouseover", () => {
        square.classList.add("hover");
      });
      square.addEventListener("mouseout", () => {
        square.classList.remove("hover");
      });
    });
  
    // Check for the winner and update the status
    function checkWinner() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];
      
      for (const [a, b, c] of winningCombinations) {
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
          status.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
          status.classList.add("you-won");
          return true;
        }
      }
      return false;
    }
  
    // Restart the game
    document.querySelector(".btn").addEventListener("click", () => {
      gameState.fill(null);
      currentPlayer = "X";
      status.textContent = "Move your mouse over a square and click to play an X or an O.";
      status.classList.remove("you-won");
  
      squares.forEach(square => {
        square.textContent = "";
        square.classList.remove("X", "O");
      });
    });
  });