class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {

        const myMap=new Map([[0,[]],[1,[]],[2,[]]])


        for (const num of nums){
            myMap.get(num).push(num)
           
        }

        const output=[]

        for (const value of myMap.values()){
            output.push(...value)
        }
        nums.splice(0,nums.length,...output)
    }
}
