/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i=0,j=height.length-1;
  let max = 0
  while(i<j){
    let temp = (j-i)*Math.min(height[i], height[j])
    max = Math.max(max, temp)
    if(height[i] < height[j]){
      i++
    } else {
      j--
    }
  }
  return max
};