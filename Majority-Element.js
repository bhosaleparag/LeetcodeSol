/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort((a,b)=>a-b)
  let no = Math.floor(nums.length/2)
  for(let i=no;i<nums.length;i++){
    if(nums[i-no] === nums[i]){
      return nums[i]
    }
  }
};