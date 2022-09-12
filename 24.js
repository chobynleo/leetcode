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
var swapPairs = function(head) {
    if(!head) return head

    var virtualHead = new ListNode(0, head)
    var cur = virtualHead

    while(cur.next && cur.next.next) {
        var temp1 = cur.next
        var temp2 = cur.next.next

        temp1.next = temp2.next
        cur.next = temp2
        temp2.next = temp1
        cur = temp1
    }

    return virtualHead.next
};