/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let maps = {}
  let res = []
  let ans = []
  for(let i of nums){
    maps[i] = ++maps[i] || 1
  }
  for(let i in maps){
    if(!res[maps[i]]) res[maps[i]] = []
    res[maps[i]].push(parseInt(i))
  }
  for(let i=res.length-1;i>0;i--){
    if(res[i]){
      ans.push(...res[i].sort((a,b)=>a-b))
      if(ans.length>=k) break
    }
  }
  return ans.slice(0,k)
};