class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l=0
        let seen = new Set()
        let maxCount=0

        for (let r=0;r<s.length;r++){
          
                while(seen.has(s[r])){
                    seen.delete(s[l])
                    l++

                }
                seen.add(s[r])
                let curCount=r-l+1
                maxCount=Math.max(maxCount,curCount)
        
       
        }
        return maxCount
    }
}
