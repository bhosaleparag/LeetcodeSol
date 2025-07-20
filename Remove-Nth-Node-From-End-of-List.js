/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if(!head?.next) return null
  let curr = head
  let prev= null
  let end = head
  for(let i=1;i<n;i++){
    end = end.next
  }
  if (!end?.next) return head.next;
  while(end?.next){
    prev = curr
    curr = curr.next
    end = end.next
  }
  prev.next = curr.next
  return head
};