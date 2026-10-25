class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s=s.toLowerCase()
        const valid = new Set([
    ...'abcdefghijklmnopqrstuvwxyz',
    ...'0123456789'
]);

        let l=0
        let r=s.length-1
        while (l<r){
            while(l<r && !valid.has(s[l])){
                l++
            }
            while (!valid.has(s[r])){
                r--
            }
            if(l<r && s[l] !== s[r]){
                return false
            }
            l++
            r--
        }
        return true
    }
}
