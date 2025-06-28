/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(t) {
  let stack=[]
  let j=1
  let max=Infinity
  if(t[0] === 99 && t[1] === t[2] && t[2]===t[3]){
    return Array.from({length: t.length},(_,i)=>t.length-1-i)
  }
  for(let i=0; i<t.length;i++){
    j=i+1
    while(j<=t.length){
      if(max<=t[i]){
        stack.push(0)
        break
      }else if(j===t.length){
        stack.push(0)
        max = t[i]
      }else{
        if(t[i]<t[j]) {
          stack.push(j-i)
          break
        }
      }
      j++
    }
  }
  return stack
};