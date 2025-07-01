/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(h) {
  let ans=0;
  for(let p=0;p<h.length;p++){
    if(h[p]===h[p-1]) continue
    let lt=p, rt=p;
    while(lt>0 && h[lt-1]>=h[p]){
      lt--;
    }
    while(rt<h.length && h[rt+1]>=h[p]){
      rt++;
    }
    ans = Math.max(ans, (rt-lt+1)*h[p])
  }
  return ans
};