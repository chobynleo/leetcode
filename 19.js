// 删除链表倒数第n个节点
// 双指针法

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    var virtualHead = new ListNode(0, head), fast = virtualHead;
    var num = 0, slow = virtualHead, temp = virtualHead;
    while(fast.next) {
        num++
        if(num >= n){
            temp = slow
            slow = slow.next
        }
        fast = fast.next
    }
    temp.next = slow.next
    return virtualHead.next
}