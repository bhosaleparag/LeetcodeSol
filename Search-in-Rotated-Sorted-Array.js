/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left=0,right=nums.length-1;
  let low = nums[left] > nums[right] ? nums[right] : nums[left]
  // [6,7,0,1,2,4,5]
  // [0,1,2,4,5,6,7]
  // [4,5,6,7,0,1,2]
  while(left<=right){
    let mid = Math.floor((left+right)/2)
    if(nums[mid] === target){
      return mid
    } else if(nums[left] <= nums[mid]){
      if(nums[left] <= target && target <= nums[mid]){
        right = mid-1
      } else {
        left = mid+1
      }
    } else{
      if(nums[right] >= target && target >= nums[mid]){
        left = mid+1
      } else {
        right = mid-1
      }
    }
  }
  return -1
};