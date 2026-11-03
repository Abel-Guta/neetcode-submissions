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
            console.log(mid)

            const left=nums[l]
            const right=nums[r]
            const middle=nums[mid]
            if(middle===target){
                return mid
            }

            if(left<middle && target<middle && target>left){
                r=mid-1
            }
            else{
                l=mid+1
            }

        }
        return -1
    }
}
