/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getListNodeLen = function(head) {
    var i =0, cur = head
    while(cur){
        i++
        cur = cur.next
    }
    return i
}
 var getIntersectionNode = function(headA, headB) {
    var lenA =  getListNodeLen(headA)
    var lenB =  getListNodeLen(headB)
    var curA = headA, curB = headB
    if(lenA < lenB){
        [curB, curA] = [curA, curB];
        [lenB, lenA] = [lenA, lenB];
    }
    
    var num = lenA - lenB
    while(num--){
        curA = curA.next
    }
    var temp = null
    while(lenB--){
        if(curA === curB){
            temp = curA
            break
        }
        curA = curA.next
        curB = curB.next
    }
    return temp
    

};