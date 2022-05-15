var MyQueue = function() {
    this.stackIn = [];
    this.stackOut = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackIn.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    var size = this.stackOut.length;
    if(size) {
        return this.stackOut.pop();
    }
    while(this.stackIn.length){
        this.stackOut.push(this.stackIn.pop());
    }
    return this.stackOut.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    const top = this.pop();
    this.stackOut.push(top);
    return top;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.stackIn.length == 0 && this.stackOut.length == 0) return true;
    return false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */