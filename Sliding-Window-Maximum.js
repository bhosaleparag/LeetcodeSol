/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let ans = []
  let l=0, r=k-1;
  let findMax = (s, e) => {
    let max = nums[s];
    let index = s;
    for (let i = s + 1; i <= e; i++) {
      if (nums[i] > max) {
        max = nums[i];
        index = i;
      }
    }
    return [max, index];
  };
  let ma = findMax(l,r)
  while(r<nums.length){
    if(nums[r] > ma[0]) ma = [nums[r], r]
    if(ma[1] < l) ma = findMax(l,r)
    ans.push(ma[0])
    l++
    r++
  }
  return ans
};