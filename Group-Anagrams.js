/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let hashObj = {}
  let ans = []
  for(let i in strs){
    let temp = strs[i].split('').sort().join('')
    if(!hashObj[temp]){
      hashObj[temp] = []
    }
    hashObj[temp].push(strs[i])
  }
  return Object.values(hashObj)
};