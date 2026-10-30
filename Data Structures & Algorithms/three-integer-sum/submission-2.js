class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        nums.sort((a,b)=>(a-b))
        const res=[]


        for (let i=0;i<nums.length-2;i++){
            if (i !== 0 && nums[i]===nums[i-1]){
                continue
            }
            if (nums[i]>0) return res

            let l=i+1
            let r=nums.length-1
           

            while(l<r){
                const total=nums[i] + nums[l] + nums[r]

                if (total<0)l++
                else if(total>0)r--
                else{
                    res.push([nums[i],nums[l],nums[r]])
                    l++
                    while (nums[l]===nums[l-1])l++

                }
            }

           





        }
         return res
    }
}
