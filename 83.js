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
    var virtualHead = new ListNode(Infinity, head)
    
    var preVal = virtualHead.val
    var pre = virtualHead
    var cur = head

    while (cur) {
        if (cur.val == preVal) {
            pre.next = cur.next
        } else {
            pre = cur
        }

        preVal = cur.val
        cur = cur.next
    }

    return virtualHead.next
};