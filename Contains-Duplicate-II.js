/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let i=0, hash={}
  while(i<nums.length){
    if(hash.hasOwnProperty(nums[i]) && Math.abs(hash[nums[i]]-i) <= k){
      return true
    } else {
      hash[nums[i]] = i
    }
    i++
  }
  return false
};