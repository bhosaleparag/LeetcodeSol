/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if(s.length < 1) return 0
  let symVal = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000, 'IV': 4,'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900}
  let ans = 0
  for(let i=0;i<s.length;i++){
    if(symVal[s[i]+s[i+1]]){
      ans += symVal[s[i]+s[i+1]]
      i++
    }else {
      ans += symVal[s[i]]
    }
  }
  return ans
};