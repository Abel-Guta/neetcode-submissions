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
            if(middle===target)return mid

            if(middle>=left){
           
                if(target>=left && target<middle){
                    
                    r=mid-1
                }
                else{
                    l=mid+1
                }
            }
            else{
                if(target<=right && target>mid){
                    l=mid+1
                }
                else{
                    r=mid-1
                }

            }
        }
        return -1
    }
}

