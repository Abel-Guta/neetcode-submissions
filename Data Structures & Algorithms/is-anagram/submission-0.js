class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const charCode=new Array(26).fill(0)
        


        for (const ch of s){
            charCode[ch.charCodeAt(0)-97]++
        }
        for (const ch of t){
            charCode[ch.charCodeAt(0)-97]--
        }

        for (const num of charCode){
            if(num !==0){
                return false
            }
        }
        return true
    }
}
