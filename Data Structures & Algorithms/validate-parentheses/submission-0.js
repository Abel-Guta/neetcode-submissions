class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const charMap=new Map([
            ["(",")"],
            [")","("],
            ["{","}"],
            ["}","{"],
            ["[","]"],
            ["]","["],
             
        ])

        let l=0
        let r=s.length-1
        while(l<r){
            if((charMap.get(s[l])===s[r]) || charMap.get(s[r])===s[l]){
                l++
                r--

            }
            else{
                return false
            }
        }
        return true
    }
}
