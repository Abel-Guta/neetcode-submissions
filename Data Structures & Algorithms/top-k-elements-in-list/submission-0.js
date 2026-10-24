class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const numsFreq=new Map()
        const output=[]

        for (const num of nums){
            numsFreq.set(num,(numsFreq.get(num)??0)+1)
        }

        let freqArr=Array.from({length:nums.length+1},()=>[])


        for (const [key,value] of numsFreq){
            freqArr[value].push(key)
        }

        for (let i=freqArr.length-1;i>=0;i--){
            if(freqArr[i].length===0){
                continue
            }
            for (const num of freqArr[i]){
                if (k>0){
                    output.push(num)
                    k--
                }
                else{
                    return output
                }

            }

        }
        return output
    }
}
