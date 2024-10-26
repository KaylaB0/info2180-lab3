document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";
    const boardState = Array(9).fill(null);
  
    function handleSquareClick(event) {
      const square = event.target;
      const squareIndex = Array.from(squares).indexOf(square);
  
      if (!boardState[squareIndex]) {
        boardState[squareIndex] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
  
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  
    function handleMouseEnter(event) {
      const square = event.target;
      if (!square.textContent) {  // Only add hover if the square is empty
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
  });