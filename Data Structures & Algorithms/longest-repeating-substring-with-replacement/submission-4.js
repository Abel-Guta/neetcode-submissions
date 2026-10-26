class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0
        const freqMap=new Map()
        let maxDuplicate=0

        let maxLength=0

        for (let r=0;r<s.length;r++){
            const ch=s[r]
            freqMap.set(ch,(freqMap.get(ch)??0)+1)
            const currentCount=freqMap.get(ch)
            if(maxDuplicate<currentCount){
                maxDuplicate=currentCount
                
            }
            let winLength=r-l+1
             while (winLength-maxDuplicate>k){
                const left=s[l]
                
                freqMap.set(left,(freqMap.get(left)??0)-1)
                l++
                winLength=r-l+1

                
            }
            if(winLength-maxDuplicate<=k){
                maxLength=Math.max(winLength,maxLength)
            }
           
        }
        return maxLength

    }
}
