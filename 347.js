/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {

    // 1. 先得到频率数组
    var map = new Map();

    for (let i = 0; i < nums.length; i++) {
        var temp = 1;
        if(map.get(nums[i]) !== undefined) {
            temp = map.get(nums[i]) + 1;
        }
        map.set(nums[i], temp)
    }
    console.log(map)
    // 2. 建造小顶堆

    var priorityQueue = new PriorityQueue((a, b) => {return a[1] - b[1]});

    // 3.根据k值处理堆
    // entry 是一个长度为2的数组，0位置存储key，1位置存储value
    for (const entry of map.entries()) {
        priorityQueue.push(entry);
        if(priorityQueue.size() > k) {
            priorityQueue.pop();
        }
    }
    // 4.倒序处理数值
    let res = []
    for (let i = priorityQueue.size() - 1; i >= 0; i--) {
        res.push(priorityQueue.queue[i][0]);
    }
    return res

};

function PriorityQueue(compareFn) {
    this.compareFn = compareFn;
    this.queue = [];
}

// 添加
PriorityQueue.prototype.push = function(item) {
    this.queue.push(item);
    let index = this.queue.length - 1;
    let parent = Math.floor((index - 1) / 2);
    // 上浮
    while(parent >= 0 && this.compare(parent, index) > 0) {
      // 交换
      [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }


PriorityQueue.prototype.pop = function() {
    const last = this.queue[0];

    this.queue[0] = this.queue.pop();

    // 找左右节点的最小值，下沉
    let parent = 0
    let left = 1; // left + 1为右孩
    let minChild = this.compare(left, left + 1) > 0? left + 1: left;
    while(this.compare(parent, minChild) > 0) {
        [this.queue[minChild], this.queue[parent]] = [this.queue[parent], this.queue[minChild]];
        parent = minChild;
        left = parent * 2 + 1;
        minChild = this.compare(left, left + 1) > 0? left + 1: left;
    }

    return last
}

PriorityQueue.prototype.size = function() {
    return this.queue.length;
}


PriorityQueue.prototype.compare = function(index1, index2) {
    if(this.queue[index1] === undefined) return 1;
    if(this.queue[index2] === undefined) return -1;
    return this.compareFn(this.queue[index1], this.queue[index2])
}

console.log(topKFrequent([1,1,1,2,2,3], k = 2))