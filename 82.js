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
var deleteDuplicates = function(head) {
    if(!head) return head

    var virtualHead = new ListNode(Infinity, head)
    var pre = virtualHead
    var cur = head

    while (cur && cur.next) {
        if (cur.val == cur.next.val) {
            while(cur.next && cur.val == cur.next.val) {
                cur = cur.next
            }
            pre.next = cur.next
            cur = cur.next
        } else {
            cur = cur.next
            pre = pre.next
        }
    }

    return virtualHead.next
};