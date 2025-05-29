/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if(!list1 && !list2) return list1
  let ans;
  let tail
  function addtoNode(val){
    if(ans){
      tail.next = new ListNode(val)
      tail = tail.next
    } else {
      ans = new ListNode(val)
      tail = ans
    }
  }
  while(list1 && list2){
    if(list1.val < list2.val){
      addtoNode(list1.val)
      list1 = list1.next
    } else {
      addtoNode(list2.val)
      list2 = list2.next
    }
  }
  while(list1){
    addtoNode(list1.val)
    list1 = list1.next
  }
  while(list2){
    addtoNode(list2.val)
    list2 = list2.next
  }
  return ans
};