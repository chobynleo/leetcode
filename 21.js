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
    var virtrualHead = new ListNode(0, null)
    var cur = virtrualHead
    var cur1 = list1
    var cur2 = list2

    while(cur1 && cur2) {
        if(cur1.val < cur2.val) {
            cur.next = cur1
            cur1 = cur1.next
        } else {
            cur.next = cur2
            cur2 = cur2.next
        }
        cur = cur.next
    } 

    if(cur1)  cur.next = cur1
    if(cur2)  cur.next = cur2

    return virtrualHead.next
};