class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
     

        let start=strs[0]

        for (let i=1;i<strs.length;i++){
            let str=strs[i]
            let x=0

            while(x<start.length){
                if (start[x] !== str[x]  || x>str.length){
                    start=start.slice(0,x)                
                }
                x++
            }

        }
        return start
     

        

        
    }
}
