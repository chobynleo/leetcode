// 206 翻转链表
// 1. 递归法
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverse = function(pre, head){
    if(!head) return pre
    var temp = head.next
    head.next = pre
    pre = head
    return reverse(pre, temp)
} 

var reverseList  = function(head){
    return reverse(null, head)
}

// 2. 双指针法
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(!head || !head.next) return head
    var cur = head, temp = null, pre = null;
    while(cur){
        temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }

    return pre

};