/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let curr = head
  let prev = null
  let next;
  while(curr!==null){
    next = curr.next  
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
};