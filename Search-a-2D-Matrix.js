/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(mat, t) {
  let lt=0,rt=mat.length-1;
  while(lt<=rt){
    let mid = Math.floor((lt+rt)/2)
    let temp = mat[mid]
    if(temp[0] > t){
      rt = mid-1
    } else if(temp[temp.length-1] < t){
      lt = mid+1
    } else {
      let tlt=0,trt=temp.length-1;
      while(tlt<=trt){
        let tmid = Math.floor((tlt+trt)/2)
        if(temp[tmid] === t) return true
        if(temp[tmid] > t){
          trt = tmid-1
        } else {
          tlt = tmid+1
        }
      }
      return false
    }
  }
  return false
};