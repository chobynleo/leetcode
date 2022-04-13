class ListNode {
    val;
    next = null;
    constructor(value, nextNode) {
      this.val = value;
      this.next = nextNode;
    }
  }

var removeElements = function(head, val){
    var virtualHead = new ListNode(0, head)
    var temp = virtualHead

    while(temp.next){
        if(temp.next.val === val){
            temp.next = temp.next.next
            continue
        }
        temp = temp.next
    }
    return virtualHead.next
}