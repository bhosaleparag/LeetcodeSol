/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(h) {
  let ans=0;
  let st=[]
  h.push(0)
  for(let i=0;i<h.length;i++){
    while(st.length && h[i] < h[st[st.length-1]]){
      let pi = st.pop();
      j = st.length===0 ? -1 : st[st.length-1]
      width = i-j-1
      ans = Math.max(ans, width*h[pi])
    }
    st.push(i)
  }
  return ans
};