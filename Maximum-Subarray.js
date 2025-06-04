/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let curr = nums[0]
  let maxArrSum = curr
  for(let i=1;i<nums.length; i++){
    curr = Math.max(nums[i], curr + nums[i]);
    maxArrSum = Math.max(maxArrSum, curr)
  }
  return maxArrSum
};