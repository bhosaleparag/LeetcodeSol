/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i=0,j=1,rep = -1
  while(j<nums.length){
    if(nums[i]===nums[j]){
      if(j-i >= 2){
        nums.splice(j,1)
      } else {
        j++
      }
    } else {
      i=j
      j++      
    }
  }
  return nums.length
};