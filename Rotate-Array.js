/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k > nums.length-1 ? k%nums.length : k
  let curr = nums.splice(nums.length-k, k)
  nums.unshift(...curr)
};