// 
class LinkNode{
    constructor(val, next){
        this.val = val
        this.next = next
    }
}

var MyLinkedList = function(){
    this._size = 0
    this._head = null
    this._tail = null
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */

MyLinkedList.prototype.getNode = function(index){
    if(index < 0 || index > this._size) return null

    var temp = new LinkNode(0, this._head)

    while(index-- >= 0){
        temp = temp.next
    }

    return temp

}

MyLinkedList.prototype.get = function(index){
    if(index < 0 || index >= this._size) return -1

    return this.getNode(index).val
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val){
    var virtualHead = new LinkNode(val, this._head)
    this._head = virtualHead
    this._size++
    if(!this._tail){
        this._tail = virtualHead
    }
}

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val){
    var temp = new LinkNode(val, null)
    this._size++
    if(!this._tail){
        this._head = this._tail = temp
        return
    }
    this._tail.next = temp
    this._tail = temp

}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val){
    if(index > this._size) return
    
    if(index <= 0) {
        this.addAtHead(val)
        return
    } 

    if(index == this._size) {
        this.addAtTail(val)
        return
    }

    var before = this.getNode(index - 1)
    before.next = new LinkNode(val, before.next)
    this._size++
}

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index <0 || index >= this._size) return

    if(index === 0){
        this._head = this._head.next
        if(index == this._size - 1) {
            this._tail = this._head
        }
        this._size--
        return
    }

    var temp = this.getNode(index - 1)
    temp.next = temp.next.next
    if(index == this._size - 1) {
        this._tail = temp
    }
    this._size--
}

