/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let col = Array.from({length: 9}, ()=>new Set())
  let box = Array.from({length: 3}, ()=>new Set())
  for(let i=0;i<9;i++){
    let row = new Set()
    if(i===3 || i===6){
      for(let k of box){k.clear()}
    }
    for(let j=0;j<9;j++){
      let temp = board[i][j]
      if(temp === '.') continue
      if(row.has(temp) || col[j].has(temp) || box[Math.floor(j/3)].has(temp)){
        return false
      } else {
        row.add(temp)
        col[j].add(temp)
        box[Math.floor(j/3)].add(temp)
      }
    }
  }
  return true
};