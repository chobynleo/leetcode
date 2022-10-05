/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    var stack = [];
    var slidingWindwMethod = {
        enter: (value) => {
            if(stack.length) {
                // 处理stack不为空的情况
                // value如果是最小就push进去作栈顶，value如果比stack栈顶值大就替换掉这个栈顶值
                var last = stack[stack.length - 1];
                while (last != undefined && last < value) {
                    stack.pop();
                    last = stack[stack.length - 1];
                }
            }
            // stack为不为空最后的逻辑都是要push进去
            stack.push(value);
        },
        quit: (value) => {
            if (value == slidingWindwMethod.getMax()) {
                stack.shift();
            }
        },
        getMax: () => {
            if (stack.length){
                return stack[0]
            }
        }
    }

    var l = r = 0, res = [];

    while (r < k) {
        slidingWindwMethod.enter(nums[r]);
        r++;
    }

    res.push(slidingWindwMethod.getMax());

    while (r < nums.length) {
        slidingWindwMethod.enter(nums[r]);
        slidingWindwMethod.quit(nums[l]);
        res.push(slidingWindwMethod.getMax());
        l++;
        r++;
    }

    return res;
};


var maxSlidingWindow2 = function (nums, k) {
    class MonoQueue {
        queue;
        constructor() {
            this.queue = [];
        }
        enqueue(value) {
            let back = this.queue[this.queue.length - 1];
            while (back !== undefined && back < value) {
                this.queue.pop();
                back = this.queue[this.queue.length - 1];
            }
            this.queue.push(value);
        }
        dequeue(value) {
            let front = this.front();
            if (front === value) {
                this.queue.shift();
            }
        }
        front() {
            return this.queue[0];
        }
    }
    let helperQueue = new MonoQueue();
    let i = 0, j = 0;
    let resArr = [];
    while (j < k) {
        helperQueue.enqueue(nums[j++]);
    }
    resArr.push(helperQueue.front());
    while (j < nums.length) {
        helperQueue.enqueue(nums[j]);
        helperQueue.dequeue(nums[i]);
        resArr.push(helperQueue.front());
        console.log('resArr', resArr)
        i++, j++;
    }
    return resArr;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
console.log(maxSlidingWindow2([1, 3, -1, -3, 5, 3, 6, 7], 3))