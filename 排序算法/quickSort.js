function quickSort (arr, left, right) {

    if(left < right) {
        var partitionIndex = partition(arr, left, right)
        quickSort(arr, left, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, right)
    }

    return arr
    }
    
function partition (arr, left ,right) { //分区操作
    var pivot = left
    var index = pivot + 1
    
    for (var i = index; i <= right; i++) {
        if(arr[i] < arr[pivot]) {
            swap(arr, i, index)
            index++
        }
    }
    
    swap(arr, pivot, index - 1)
    
    return index - 1

}
    
function swap(arr, i, j) {
    var temp = arr[i]
    arr [i] = arr[j]
    arr[j] = temp
}
    
var arr = [2,7,8,19,10,6,11, 33, 25, 0 , 4]
console.log(quickSort(arr, 0, arr.length - 1))