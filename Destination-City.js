/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  let curr = paths[0][1]
  let mapDest = new Map()
  for(let i in paths){
    mapDest.set(paths[i][0], i)
  }
  while(curr){
    let temp = mapDest.get(curr)
    if(!temp) return curr
    curr=paths[temp][1]
  }
};