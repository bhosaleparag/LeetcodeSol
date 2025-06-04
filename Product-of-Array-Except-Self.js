/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let allProd = nums.reduce((total, num)=>total*num,1)
  function expectZero(i){
    return nums.reduce((total, num, idx)=>idx===i ? total : total*num,1)
  }
  return nums.map((num, i)=>num===0 ? expectZero(i) : allProd/num)
};