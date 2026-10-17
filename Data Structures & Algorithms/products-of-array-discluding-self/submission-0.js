class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pre=[1]

        for (let i=1;i<nums.length;i++){
            pre.push(pre.at(-1)*nums[i-1])
        }
        let suf=1

        for (let i=nums.length-2;i>=0;i--){

            suf=suf*nums[i+1]
            pre[i]=pre[i]*suf
        }
        return pre


    }
}
