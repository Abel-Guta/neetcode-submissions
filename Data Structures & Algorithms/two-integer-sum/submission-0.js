class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numbers=new Map()


        for(let i=0;i<nums.length;i++){
            const pair=target-nums[i]

            if(numbers.has(pair)){
                return [i,numbers.get(pair)]
            }
            else{
                numbers.set(nums[i],i)
            }
        }
        



    }
}
