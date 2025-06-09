/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let res = 0
  let nextVal={}
  for(let num of nums){
    nextVal[num] = ++nextVal[num] || 1
  }
  for(let key in nextVal){
    if(nextVal[key] && nextVal[Number(key)+1])
    res = Math.max(res, nextVal[key] + nextVal[Number(key)+1])
  }
  return res
};