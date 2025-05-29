/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  let visited = []
    let obj = {}
    let min = 0
    function traverse(node, row=0, col=0){
      if(node?.left) traverse(node.left, row + 1, col - 1)
      min = Math.min(min, col)
      if(obj[col]){
        obj[col].push({val: node.val, row})
        obj[col].sort((a,b)=>{
          return a.row==b.row ? a.val-b.val : a.row-b.row
        })
      } else {
        obj[col] = [{val: node.val, row}]
      }
      if(node?.right) traverse(node.right, row + 1, col + 1)
    }
    traverse(root)
    Object.keys(obj).sort((a,b)=>a-b).forEach(key=>{
      visited.push(obj[key].map(a=>a.val))
    })
    return visited
};