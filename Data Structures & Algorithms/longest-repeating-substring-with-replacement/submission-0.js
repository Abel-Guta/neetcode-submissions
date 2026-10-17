class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freqCount=new Map()

        for (let i=0;i<s.length;i++){
            freqCount.set(s[i],(freqCount.get(s[i])??0)+1)
        }
        let maxCount=0

        for (const value of freqCount.values()){
            maxCount=Math.max(maxCount,value)
        }

        const leftOver=s.length-maxCount
        const diff=k-leftOver
        if (diff >0){
            return maxCount+leftOver
        }
        else if(diff<0){
            return maxCount+k

        }
        else{
            return maxCount+maxCount

        }


    }
}
