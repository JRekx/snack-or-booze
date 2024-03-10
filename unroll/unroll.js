function unroll(square) {
    const result = [];
  
    while (square.length) {
      // Top row: Move right
      result.push(...square.shift());
  
      // Right column: Move down
      for (let i = 0; i < square.length; i++) {
        result.push(square[i].pop());
      }
  
      // Bottom row: Move left (in reverse)
      if (square.length) { // Check if the square isn't empty
        result.push(...square.pop().reverse());
      }
  
      // Left column: Move up (in reverse)
      for (let i = square.length - 1; i >= 0; i--) {
        result.push(square[i].shift());
      }
    }
  
    return result;
  }
  

module.exports = unroll;
