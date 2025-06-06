/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let temp = 1
  for(let i=digits.length-1; i>=0;i--){
    if(digits[i] === 9){
      digits[i] = 0
    } else {
      digits[i] = digits[i] + temp
      temp = 0
      break
    }
  }
  if(temp) digits.unshift(1)
  return digits
};