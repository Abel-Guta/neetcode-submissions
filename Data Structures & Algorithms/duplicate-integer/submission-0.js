class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let numsFreq=new Map()


        for(const num of nums){
            numsFreq.set(num,(numsFreq.get(num)??0)+1)
        }

        for (const freq of numsFreq.values()){
            if (freq >1){
                return true
            }

        }
        return false
    }
}
