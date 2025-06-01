/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows===1) return [[1]]
  let res = [[1],[1,1]]
  function PascalGenerate(numRows, memo=[1,2,1]){
    if(numRows === res.length) return
    res.push(memo)
    let temp = [1]
    for(let i=0;i<memo.length-1;i++){
      temp.push(memo[i]+memo[i+1])
    }
    temp.push(1)
    PascalGenerate(numRows, temp)
  }
  PascalGenerate(numRows)
  return res
};