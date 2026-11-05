class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0
        const freqCount=new Map()
        let maxFreq=0
        let maxWind=0
        for (let r=0;r<s.length;r++){

            freqCount.set(s[r],(freqCount.get(s[r])??0)+1)
            maxFreq=Math.max(...freqCount.values())
            
        
           
               
           

            while((r-l+1)-maxFreq>k){
                freqCount.set(s[l],(freqCount.get(s[l])-1))
                l++
            }

             maxWind=Math.max((r-l+1),maxWind)
        

             

                
        






        }
        return maxWind
    }
}
