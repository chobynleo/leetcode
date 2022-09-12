/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) return false

    var slow = head.next, fast = head.next.next

    while (fast && fast.next && slow != fast) {
        slow = slow.next
        fast = fast.next.next
    }

    if(!fast || !fast.next) return false

    return true
};