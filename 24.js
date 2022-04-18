// 24 两两交换节点
var swapPairs = function(head){
    var virtualHead = new ListNode(0, head), cur = virtualHead
    while(cur.next && cur.next.next){
        var pre = cur.next
        var temp = cur.next.next.next
        cur.next = cur.next.next
        cur.next.next = pre
        pre.next = temp
        cur = pre
    }
    return virtualHead.next
}