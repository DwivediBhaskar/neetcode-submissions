class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        let expactedSum = n*(n+1)/2;
        let actUalSum = nums.reduce((acc,curr)=>acc+curr,0);
        return expactedSum - actUalSum;
    }
}
