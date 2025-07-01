/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let lt=0,rt=nums.length;
  while(lt<=rt){
    let mid = Math.floor((lt+rt)/2)
    if(target === nums[mid]) return mid
    if(target < nums[mid]){
      rt = mid-1
    }else{
      lt = mid+1
    }
  }
  return -1
};