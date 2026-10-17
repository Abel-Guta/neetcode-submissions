class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        const seen=new Set()
        let count=0
        let maxCount=0
        let l=0

        for (let i=0;i<s.length;i++){
                while(seen.has(s[i])){
                    seen.delete(s[l])
                    l++
                }
            
                seen.add(s[i])
                count=i-l+1
                maxCount=Math.max(count,maxCount)
        }
        return maxCount
    }
}
