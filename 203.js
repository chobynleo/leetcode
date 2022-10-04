/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if(!head) return null;

    head.next = removeElements(head.next, val);

    return head.val == val? head.next : head;
};

 var removeElements = function(head, val) {
  if(!head) return head

  var virtualHead = new ListNode(0, head)
  var cur = virtualHead

  while(cur.next) {
      if(cur.next.val == val) {
          cur.next = cur.next.next
      } else {
          cur = cur.next
      }
  }

  return virtualHead.next
};