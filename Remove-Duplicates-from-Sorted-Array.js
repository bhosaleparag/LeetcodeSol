/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length<=1) return 1
  let i=0, j=1
  while(j<nums.length){
    if(nums[i] !== nums[j]){
      i++
      nums[i] = nums[j]
    }
    j++
  }
  return i+1
};