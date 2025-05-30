/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
  nums = nums.sort((a,b)=>a-b);
  let res = [];
  let low = 0;
  let high = nums.length-1;
  let visited = new Set()
  function findIdx(i) {
    if (i < 0 || i >= nums.length) return;
    if (nums[i] !== target || visited.has(i)) return;
    res.push(i);
    visited.add(i);
    findIdx(i - 1);
    findIdx(i + 1);
  }

  while(low<=high){
    let mid = Math.floor((low+high)/2)
    if(nums[mid]===target) findIdx(mid)
    if(nums[mid] < target){
      low = mid+1
    } else {
      high = mid-1
    }
  }
  return res.sort((a,b)=>a-b)
};