class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength=0
        const charCount=new Map()
        let l=0
        for (let r=0;r<s.length;r++){
            while(charCount.has(s[r])){
                charCount.delete(s[l])
                l++
                
            }
            
                charCount.set(s[r],1)
                const length=r-l+1
                maxLength=Math.max(length,maxLength)
        
        }
        return maxLength
    }
}
