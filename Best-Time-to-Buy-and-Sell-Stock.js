/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0
  let i=0,j=1;
  let buy = prices[0]
  let sell = prices[1]
  while(j<prices.length){
    if(maxProfit < (prices[j] - prices[i])){
      maxProfit = prices[j] - prices[i]
    }
    if(prices[i] > prices[j]){
      i=j
    }
    j++
  }
  
  return maxProfit
};