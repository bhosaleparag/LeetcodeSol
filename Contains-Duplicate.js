/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let contain = new Set();
  for( let i of nums){
    if(contain.has(i)) return true 
    contain.add(i)
  }
  return false 
};