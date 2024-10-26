document.addEventListener("DOMContentLoaded", function() {
    // Select all the div elements within the game board
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";  // Start with player "X"
    const boardState = Array(9).fill(null);  // Array to track board state
  
    // Function to handle a square being clicked
  function handleSquareClick(event) {
    const square = event.target;
    const squareIndex = Array.from(squares).indexOf(square);

    // If the square is empty
    if (!boardState[squareIndex]) {
      boardState[squareIndex] = currentPlayer;
      square.textContent = currentPlayer;       // Add "X" or "O" to the square
      square.classList.add(currentPlayer);      // Add "X" or "O" class for styling

      // Switch player for next turn
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }

  // Add event listener to each square
  squares.forEach(square => {
    square.addEventListener("click", handleSquareClick);
  });
});