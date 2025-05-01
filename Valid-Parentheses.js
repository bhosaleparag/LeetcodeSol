/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length<=1) return false 
  let start = {\{\: true, \[\: true, \(\: true}
  let end = { \}\: \{\,  \]\:\[\, \)\:\(\}
  let stack = []
  for(i of s){
    if(start[i]){
      stack.push(i)
    } else if(stack[stack.length-1] === end[i]){
      stack.pop()
    } else {
      return false
    }
  }
  return stack.length===0
};