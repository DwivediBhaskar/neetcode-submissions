class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++ ){
            let complement = target - nums[i];
            if(nums.includes(complement)){
                let complementIndex = nums.indexOf(complement);
                if(complementIndex !== i){
                    return [i,complementIndex];
                }
            }
        }
    }
}
