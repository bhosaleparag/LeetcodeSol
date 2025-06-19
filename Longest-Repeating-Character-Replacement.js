/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const count = {};
  count[s[0]] = 1
  let i=0;
  let maxfreq = 1;
  let maxLen = 1;

  for(let j=1;j<s.length;j++){
    let char = s[j]
    count[char] = (count[char] || 0)+1
    maxfreq = Math.max(maxfreq, count[char])
    while(j-i+1-maxfreq > k){
      count[s[i]]--
      i++
    }
    maxLen = Math.max(maxLen, j-i+1)
  }
  return maxLen
};