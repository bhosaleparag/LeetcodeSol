/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let res = []
  let start=nums[0], range=nums[0];
  for(let i=1; i<=nums.length;i++){
    if(range+1 !== nums[i]){
      if(start === range){
        res.push(`${start}`)
      } else {
        res.push(`${start}->${range}`)
      }
      start=nums[i]
      range = nums[i]
    } else {
      range = nums[i]
    }
  }
  return res
};