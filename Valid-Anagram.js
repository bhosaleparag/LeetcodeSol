/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false
  let sObj = {};
  let tObj = {};
  for(let i=0;i<s.length;i++){
    sObj[s[i]] = ++sObj[s[i]] || 1
    tObj[t[i]] = ++tObj[t[i]] || 1
  }
  for(let i=0;i<s.length;i++){
    if(sObj[s[i]] !== tObj[s[i]] || sObj[t[i]] !== tObj[t[i]]){
      return false
    }
  }
  return true
};