/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 
let divBan = (ps, no)=>{
  let th = 0
  for(let i of ps){
    th+=Math.ceil(i/no)
  }
  return th
}
var minEatingSpeed = function(ps, h) {
  if(ps.length === 1) return Math.ceil(ps[0]/h)
  let lt=1,rt=Math.max(...ps)
  let ans = rt;
  while(lt<=rt){
    let mid = Math.floor((lt+rt)/2)
    let res = divBan(ps, mid)
    if(res<=h){
      ans = mid
      rt = mid-1
    } else {
      lt = mid+1
    }
  }
  return ans
};