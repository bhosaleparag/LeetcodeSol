/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let singleMax=0, allMax=0;
  let i=0,j=prices.length-1,buy=prices[0],sell=prices[prices.length-1];
  while(i<j){
    if(buy>prices[i]) buy = prices[i]
    if(sell<prices[j]) sell = prices[j]
    i++
    j--
  }
  allMax = sell-buy
  i=0
  j=1
  while(j<prices.length){
    if(prices[j] > prices[i]){
      singleMax += prices[j]-prices[i]
    }
    i=j
    j++
  }
  return Math.max(singleMax, allMax)
};