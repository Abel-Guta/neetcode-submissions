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

            const left=nums[l]
            const right=nums[r]
            const middle=nums[mid]

            if(middle === target)return mid 


            if(left<middle){
                if (target<middle && target >=left)r=mid-1
                else l=mid+1
            }
            else{
                if (target>middle  && target<=right) l=mid+1
                else r=mid-1
            }
            

            



        }
        return -1
    }
}
