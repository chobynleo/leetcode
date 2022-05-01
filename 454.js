/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let len = nums1.length;
    let map_12 = {};

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let sum_12 = nums1[i] + nums2[j];
            if(map_12[sum_12]) {
                map_12[sum_12]++
            } else {
                map_12[sum_12] = 1
            }
        }
        
    }
    
    let count = 0;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let sum_34 = nums3[i] + nums4[j];
            if(map_12[-sum_34]) {
                count += map_12[sum_34];
            } 
        }
    }
    
    return count;
};

var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const twoSumMap = new Map();
    let count = 0;

    for(const n1 of nums1) {
        for(const n2 of nums2) {
            const sum = n1 + n2;
            twoSumMap.set(sum, (twoSumMap.get(sum) || 0) + 1)
        }
    }

    for(const n3 of nums3) {
        for(const n4 of nums4) {
            const sum = n3 + n4;
            count += (twoSumMap.get(0 - sum) || 0)
        }
    }

    return count;
};