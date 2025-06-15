/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let temp = s.toLowerCase().match(/[A-Za-z0-9]/g) || [];
  let i=0;
  let j=temp.length-1;
  while(i<j){
    if(temp[i] !== temp[j]) return false;
    i++ 
    j--
  }
  return true
};