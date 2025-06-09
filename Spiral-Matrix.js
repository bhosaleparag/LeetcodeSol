/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let res = [];
  let startRow = 0, endRow = matrix.length - 1;
  let startCol = 0, endCol = matrix[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      res.push(matrix[startRow][i]);
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      res.push(matrix[i][endCol]);
    }
    endCol--;
    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        res.push(matrix[endRow][i]);
      }
      endRow--;
    }
    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        res.push(matrix[i][startCol]);
      }
      startCol++;
    }
  }

  return res;
};
