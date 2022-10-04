// 209.长度最小的子数组
var minSubArrayLen = function(target, nums) {
    var min = Infinity
    var sum = 0
    // var res = []
    var l = 0
    for(var i = 0; i < nums.length; i++) {
        sum += nums[i]
        while(sum >= target) {
            // res.push(nums)
            if(i - l + 1 < min) min = i - l + 1
            sum -= nums[l]
            l++
        }
    }

    return min == Infinity? 0 : min
};

// 来源：某笔试
// 描述：给定一个非负整数数组，寻找长度最小的组数组，使得该子数组的和不小于给定值
// 附加：若存在多个满足条件的组数组，返回和最小的那个。若满足条件的和最小的子数组依然有多个，则返回第一个

var minSubArray = function(target, nums) {
    var min = Infinity
    var sum = 0
    var cur = []
    var res = []
    var l = 0
    for(var i = 0; i < nums.length; i++) {
        sum += nums[i]
        cur.push(nums[i])
        while(sum >= target) {
            if(i - l + 1 < min) {
                min = i - l + 1
                res = [...cur]
            }
            sum -= nums[l]
            cur.shift()
            l++
        }
    }

    return min == Infinity? [] : res
};

var nums = [4,3,1,6,12,0,8,5]
console.log(minSubArray(20, nums))
