// 冒泡排序
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                var temp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// 实际上，上述的冒泡排序并不完备，如果要扫描的集合已经有序，就无需进入第二层for循环
// 冒泡排序
function bubbleSort2(arr) {
    var len = arr.length;

    for (var i = 0; i < len - 1; i++) {
        var isSorted = true;

        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                var temp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
                isSorted = false;           // 无序
            }
        }

        if(isSorted) break;
    }
    return arr;
}


var arr = [2,7,8,19,10,6,11, 33, 25, 0 , 4]

console.time('计时');
bubbleSort(arr)
console.timeEnd('计时');

console.time('计时');
bubbleSort2(arr)
console.timeEnd('计时');