/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left=0, right=nums.length-1
  let start = nums[0] > nums[right] ? right : 0
  if(start === 0) return nums[0]
  if(nums[start] < nums[start-1]) return nums[start]
  // [4,5,6,7,0,1,2]
  // [7,0,1,2,4,5,6]
  // [2,4,5,6,7,0,1]
  while(left<=right){
    let mid = Math.floor((left+right)/2)
    if(nums[mid] > nums[start]){
      left = mid+1
    } else {
      start = mid
      right = mid-1
    }
  }
  return nums[start]
};