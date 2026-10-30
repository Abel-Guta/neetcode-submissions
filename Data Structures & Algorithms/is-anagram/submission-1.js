class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const charFreq=new Array(26).fill(0)

        for (const ch of s){
            charFreq[ch.charCodeAt(0)-97]++
        }

         for (const ch of t){
            charFreq[ch.charCodeAt(0)-97]--
        }

        for (const freq of charFreq){
            if(freq !== 0) return false
        }
        return true
    }
}
