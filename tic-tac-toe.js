document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";
    const boardState = Array(9).fill(null);
    const statusDiv = document.getElementById("status"); // Get the status div
    const newGameButton = document.getElementById("newGame"); // Get the new game button
  
    // Winning combinations
    const winningCombinations = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal \
      [2, 4, 6]  // Diagonal /
    ];
  
    function handleSquareClick(event) {
      const square = event.target;
      const squareIndex = Array.from(squares).indexOf(square);
  
      if (!boardState[squareIndex]) {
        boardState[squareIndex] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
  
        // Check for a winner after the move
        if (checkWinner(currentPlayer)) {
          updateStatus(`${currentPlayer} is the Winner!`);
          return; // Exit the function to prevent further clicks
        }
  
        // Switch player for next turn
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  
    function checkWinner(player) {
      return winningCombinations.some(combination => {
        return combination.every(index => boardState[index] === player);
      });
    }
  
    function updateStatus(message) {
      statusDiv.textContent = `Congratulations! ${message}`;
      statusDiv.classList.add("you-won");
    }
  
    function resetGame() {
      // Clear the board
      squares.forEach(square => {
        square.textContent = ""; // Clear X or O
        square.classList.remove("X", "O", "hover"); // Remove classes
      });
  
      // Reset the game state
      currentPlayer = "X";
      boardState.fill(null); // Reset the board state
  
      // Reset the status message
      statusDiv.textContent = "Player X's turn"; // Original message
      statusDiv.classList.remove("you-won");
    }
  
    function handleMouseEnter(event) {
      const square = event.target;
      if (!square.textContent) {
        square.classList.add("hover");
      }
    }
  
    function handleMouseLeave(event) {
      event.target.classList.remove("hover");
    }
  
    // Add event listeners to each square
    squares.forEach(square => {
      square.addEventListener("click", handleSquareClick);
      square.addEventListener("mouseenter", handleMouseEnter);
      square.addEventListener("mouseleave", handleMouseLeave);
    });
  
    // Add event listener for New Game button
    newGameButton.addEventListener("click", resetGame);
  });