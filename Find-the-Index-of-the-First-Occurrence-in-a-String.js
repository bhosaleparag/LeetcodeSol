/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(haystack.length === 1 && needle.length === 1) return haystack === needle ? 0 : -1
  let len = needle.length
  for(let i=0;i<=haystack.length-len;i++){
    if(haystack.slice(i, i+len) === needle){
      return i
    }
  }
  return -1
};