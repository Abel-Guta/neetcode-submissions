class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l=0
        let r=nums.length-1
        let minimum=Infinity

        while(l<=r){
            let mid=Math.floor((l+r)/2)

            const left=nums[l]
            const right=nums[r]
            const middle=nums[mid]
            minimum=Math.min(minimum,middle)
       


            if(middle >left){
                l=mid+1

            }
            else{
                r=mid-1
            }



        }
        return minimum

    }


}
