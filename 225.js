var MyStack = function() {
    this.queues = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queues.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    var size = this.queues.length;
    size--;
    while(size--) {
        this.queues.push(this.queues.shift())
    }
    return this.queues.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const top = this.pop();
    this.queues.push(top);
    return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queues.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */