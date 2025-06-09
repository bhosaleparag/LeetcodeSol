/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
  const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  if (isEqual(mat, target)) return true;

  for (let r = 0; r < 3; r++) {
    for (let i = 0; i < mat.length; i++) {
      for (let j = i + 1; j < mat[0].length; j++) {
        [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
      }
    }
    for (let row of mat) {
      row.reverse();
    }
    if (isEqual(mat, target)) return true;
  }

  return false
};