/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let low = 0
  let high = nums.length-1
  if(nums[high] === target) return high
  if(nums[high] < target) return high+1
  if(nums[0] > target) return low
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    if(nums[mid]===target) return mid
    if(nums[mid-1] < target && nums[mid] > target) return mid
    if(nums[mid] < target && nums[mid+1] > target) return mid+1
    if(nums[mid]<target){
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
};
