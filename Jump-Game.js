/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let i=0,prev=0,fall=0;
  // [5,9,3,2,1,0,2,3,3,1,0,0]
  while(i<nums.length-1){
    if(nums[i]<=0){
      fall = Math.max(fall, i)
      if(fall <= prev) return false
      i = prev
      prev++
    } else {
      i += nums[i]
    }
  }
  return true
};