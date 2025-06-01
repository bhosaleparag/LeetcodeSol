/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let zeroRow = new Array(matrix[0].length).fill(0);
  let rowIdxSet = new Set();
  let colIdxSet = new Set();

  for(let row in matrix){
    let rowHasZero = false
    for(let col in matrix[row]){
      if(matrix[row][col] === 0){
        colIdxSet.add(col)
        rowHasZero = true
      }
    }
    if(rowHasZero){
      matrix[row] = zeroRow
    } else {
      rowIdxSet.add(row)
    }
  }
  rowIdxSet.forEach(row=>{
    colIdxSet.forEach(col=>{
      matrix[row][col] = 0
    })
  })
  return matrix
};