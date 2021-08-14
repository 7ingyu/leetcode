/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  let m = matrix.length;
  let n = m ? matrix[0].length: 0;

  let zeroRow = false;
  let zeroCol = false;

  for (let row = 0; row < m; row ++) {
      for (let col = 0; col < n; col ++) {
          if (matrix[row][col] === 0) {
            if (row === 0) {
              zeroRow = true;
            }
            if (col === 0) {
              zeroCol = true;
            }
            if (row > 0 && col > 0) {
              matrix[row][0] = 0;
              matrix[0][col] = 0;
            }
          }
      }
  }

  for (let row = 1; row < m; row ++) {
      if (matrix[row][0] === 0) {
          matrix[row] = new Array(n).fill(0);
      }
  }

  for (let col = 0; col < n; col ++) {
      if (matrix[0][col] === 0) {
          for (let row = 0; row < m; row ++) {
              matrix[row][col] = 0;
          }
      }
  }

  matrix[0] = zeroRow ? new Array(n).fill(0) : matrix[0];
  if (zeroCol) {
    for (let row = 0; row < m; row ++) {
      matrix[row][0] = 0;
    }
  }

};