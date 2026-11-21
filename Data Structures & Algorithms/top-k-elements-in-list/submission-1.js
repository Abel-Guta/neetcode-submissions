class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap=new Map()
        const sorted= Array.from({length:nums.length+1},()=>[])
        const output=[]

        for(const num of nums){
            countMap.set(num,(countMap.get(num)??0)+1)
        }

        for(const [key,value] of countMap.entries()){
            sorted[value].push(key)

        }

        for(let i=sorted.length-1;i>=0;i--){
            for(const num of sorted[i]){
                if(output.length < k)output.push(num)
                else return output
            }

        }
        return output
    }
}
