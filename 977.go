func sortSqtArr(nums []int) []int {
	n := len(nums)
	i, j, k := 0, n-1, n-1
	newArr := make([]int, n)
	for i<=j {
		left, right := nums[i] * nums[i], nums[j]* nums[j]
		if left < right {
			newArr[k] = right
			j--
		} else{
			newArr[k] = left
			i++
		}
		k--
	}
	return ans
}