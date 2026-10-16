class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let seen=new Set(nums)
     
        let maxCount=0

        for (let i=0;i<nums.length;i++){
            seen.add(nums[i])

        }

        for (let i=0;i<nums.length;i++){
            if(seen.has(nums[i]-1)){
                continue
            }
            let j=nums[i]+1
            let count=1

            while (seen.has(j)){
                count++
                j++
            }
            maxCount=Math.max(count,maxCount)

        }

         return maxCount



    }
   
}
