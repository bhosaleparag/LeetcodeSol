/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.split(' ')
  if(s[s.length-1].length > 0) return s[s.length-1].length
  for(let i=s.length-1;i>=0;i--){
    if(s[i].length > 0) return s[i].length
  }
};