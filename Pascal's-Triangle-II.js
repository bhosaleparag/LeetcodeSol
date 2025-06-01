/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex, memo=[1,2,1]) {
  if(rowIndex===0) return [1]
  if(rowIndex===1) return [1,1]
  if(rowIndex === memo.length-1) return memo
  let temp = [1]
  for(let i=0;i<memo.length-1;i++){
    temp.push(memo[i]+memo[i+1])
  }
  temp.push(1)
  return getRow(rowIndex, temp)
};