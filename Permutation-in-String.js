/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let tc = 0;
  let comp = 0;
  s1=s1.split('').sort().join('')
  for(let i of s1){
    tc+=i.charCodeAt()
  }
  for(let i=0;i<s1.length;i++){
    comp += s2.charCodeAt(i)
  }
  let i=0
  if(tc === comp){
    let temp = s2.slice(0, s1.length).split('').sort().join('')
    if(temp === s1){
      return true;
    }
  }
  for(let j=s1.length;j<s2.length;j++){
    comp -= s2.charCodeAt(i)
    comp += s2.charCodeAt(j)
    i++
    if(tc === comp) {
      let temp = s2.slice(i, j+1).split('').sort().join('')
      if(temp === s1){
        return true;
      }
    }
  }
  return false
};