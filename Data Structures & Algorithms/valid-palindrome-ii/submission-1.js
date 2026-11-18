class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l=0
        let r=s.length-1
    

        function checkPalindrome(l,r){
            while(l<r){
                if(s[l] !== s[r])return false


            
                l++
                r--
            
            }
            return true

        }


        while(l<r){

            if(s[l]!==s[r]){
                return checkPalindrome(l+1,r) || checkPalindrome(l,r-1)
                



            }
            else{
                l++
                r--
            }
        }
        return true
    }
}
