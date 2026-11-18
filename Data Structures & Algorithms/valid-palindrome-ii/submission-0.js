class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l=0
        let r=s.length-1
        let wrongMatch=0


        while(l<r){

            if(s[l]!==s[r]){
                if (wrongMatch>0)return false
                wrongMatch++
                if(s[l+1]===s[r])l++

                
                else if(s[r-1]===s[l])r--
                else return false


            }
            else{
                l++
                r--
            }
        }
        return true
    }
}
