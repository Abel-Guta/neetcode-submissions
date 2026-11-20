class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const output=[]
        const res=[]
        let sum=0

        function dfs(i){
            if(sum===target){
                output.push([...res])
                return
            }
            if(sum>target)return
            if(i===nums.length)return

            res.push(nums[i])
            sum+=nums[i]
            dfs(i)
            res.pop()
            sum-=nums[i]

            dfs(i+1)
        }
        dfs(0)
        return output
    }
}
