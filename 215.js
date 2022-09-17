// 堆：维护一个长度为k的优先队列，并从小到大排列，如果新元素比头部元素大，头部元素不再是前k大，弹出，不断更新即可，最后头元素即是第k大
// 快速选择：快排每一趟扫描都会定位一位数字到正确位置，并且其左边元素小于它，右边元素大于它，因此我们可以根据这个数字只排需要找的区间，不再是两边都要排
// 冒泡排序的原理是遍历n次数组,每次拿出最大值与最后一位交换,本题只需要求到第k个最大值,也就是说我们只需要遍历k次数组就够了,时间复杂度为O(nlogn)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 堆排序
var findKthLargest = function(nums, k) {
    var size = nums.length;
    // 建立堆
    for(var i = parseInt(size/2)+1 ; i >= 0 ; i--) {
        heapify(nums, i, size);
    }
    // 排序
    for(var j = size - 1; j >= size-k; j--) {
        // 得到本次的最大，将最大的与最后一个交换位子
        swap(nums, 0, j);
        heapify(nums, 0, j);
    }
    return nums[size-k];
}
function swap(arr, i ,j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j]= temp;
}
function heapify(arr, x, length) {
    var l = 2*x+1;
    var r = 2*x+2;
    var largest = x;
    if(l < length && arr[l] > arr[largest]) {
        largest = l;
    }
    if(r < length && arr[r] > arr[largest]) {
        largest = r;
    }
    if(largest != x) {
        swap(arr, x, largest);
        // 递归交换以下的是否也建好堆.
        heapify(arr, largest, length);
    }
}


// 快速排序
var findKthLargest = (nums, k) => {
    const n = nums.length;

    const quick = (l, r) => {
        if (l > r) return;//递归终止条件
        let random = Math.floor(Math.random() * (r - l + 1)) + l; //随机选取一个索引
        swap(nums, random, r); //将它和位置r的元素交换，让nums[r]作为基准元素

        //对基准元素进行partition
        let pivotIndex = partition(nums, l, r);
        //进行partition之后，基准元素左边的元素都小于它 右边的元素都大于它
        //如果partition之后，这个基准元素的位置pivotIndex正好是n-k 则找大了第k大的数
        //如果n-k<pivotIndex,则在pivotIndex的左边递归查找
        //如果n-k>pivotIndex，则在pivotIndex的右边递归查找
        if (n - k < pivotIndex) {
            quick(l, pivotIndex - 1);
        } else {
            quick(pivotIndex + 1, r);
        }
    };

    quick(0, n - 1);//函数开始传入的left=0，right= n - 1
    return nums[n - k]; //最后找到了正确的位置 也就是n-k等于pivotIndex 这个位置的元素就是第k大的数
};
function partition(nums, left, right) {
    let pivot = nums[right];             	//最右边的元素为基准
    let pivotIndex = left;               	//pivotIndex初始化为left
    for (let i = left; i < right; i++) { 	//遍历left到right-1的元素
        if (nums[i] < pivot) {             	//如果当前元素比基准元素小
            swap(nums, i, pivotIndex);       	//把它交换到pivotIndex的位置
            pivotIndex++;                    	//pivotIndex往前移动一步
        }
    }
    swap(nums, right, pivotIndex);       	//最后交换pivotIndex和right
    return pivotIndex;                   	//返回pivotIndex
}
function swap(nums, p, q) {//交换数组中的两个元素
    const temp = nums[p];
    nums[p] = nums[q];
    nums[q] = temp;
}


// 冒泡排序
var findKthLargest = function (nums, k) {
    for (let i = nums.length; i > nums.length - k - 1; i--) {
      for (let j = 0; j < i; j++) {
        if (nums[j] > nums[i]) {
          [nums[j], nums[i]] = [nums[i], nums[j]]
        }
      }
    }
    return nums[nums.length - k]
};
var nums = [3,2,1,5,6,4], k = 2
console.log(findKthLargest(nums, k))