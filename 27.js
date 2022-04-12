// 移除元素
var removeElement = (nums, val) => {
    var k = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] != val){
            nums[k++] = nums[i]
        }
    }
    return k;
}
var nums = [3,2,2,3]
var val = 3
console.log(removeElement(nums, val))