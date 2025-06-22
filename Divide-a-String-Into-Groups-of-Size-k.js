/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
  let i=0,j=0;
  let ans=[]
  while(i<s.length){
    ans.push(s.slice(i, i+k))
    i+=k
  }
  if(ans[ans.length-1].length < k){
    ans[ans.length-1] += fill.repeat(k-ans[ans.length-1].length)
  }
  return ans
};