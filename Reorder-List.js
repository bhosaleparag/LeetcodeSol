/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let st = []
  let temp = head
  while(temp?.val){
    st.push(temp.val)
    temp = temp.next
  }
  let odd = head
  let even = head.next
  while(odd?.val && even?.val){
    let s = st.shift()
    odd.val = s
    let e = st.pop()
    even.val = e
    odd = even?.next
    even = odd?.next
  }
  while(odd?.val){
    let s = st.shift()
    odd.val = s
    odd = even?.next
  }
  while(even?.val){
    let e = st.pop()
    even.val = e
    even = odd?.next
  }
};