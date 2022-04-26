/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    if(nums1.length < nums2.length){
        let _ = nums2;
        nums2 = nums1;
        nums1 = _;
    }
    var num2Set = new Set(nums2);
    var setTemp = new Set();
    for(var i=0; i<nums1.length;i++) {
        if(num2Set.has(nums1[i])){
            setTemp.add(nums1[i])
        }
    }
    return Array.from(setTemp)

};