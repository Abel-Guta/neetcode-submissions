class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l=0
        let r=nums.length-1

        while(l<=r){
            const mid=Math.floor((l+r)/2)
            const middle=nums[mid]
            const left=nums[l]
            const right=nums[r]

            if(middle===target) return mid

            else if(middle<target)l=mid+1
            else r=mid-1
            



        }
        return -1
    }
}
