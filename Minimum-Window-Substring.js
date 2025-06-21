/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if(s.length < t.length) return ''
  let tMap = {}
  let ans = [0, Infinity]
  let sIdx=0, tLen=t.length;
  for(let i of t){
    tMap[i] = (tMap[i] || 0) + 1
  }
  for(let eIdx=0; eIdx<s.length;eIdx++){
    let ch = s[eIdx]
    if (ch in tMap) {
      tMap[ch]--;
      if (tMap[ch] >= 0) tLen--;
    }
    while(tLen === 0){
      if ((eIdx - sIdx) < (ans[1] - ans[0])) {
        ans = [sIdx, eIdx];
      }
      const startChar = s[sIdx];
      if (startChar in tMap) {
        tMap[startChar]++;
        if (tMap[startChar] > 0) tLen++;
      }
      sIdx++;
    }
  }
  return ans[1] === Infinity ? '' : s.slice(ans[0], ans[1]+1)
};