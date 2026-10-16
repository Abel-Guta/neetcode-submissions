class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    
    encode(strs) {
        let concatinated=""
        for (let i=0;i<strs.length;i++){
            concatinated=concatinated+strs[i].length+"."+strs[i]
            
        }
        return concatinated
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res=[]
        for (let i=0;i<str.length;i++){
            let j=i
            while(j<str.length && str[j]!=="."){
                j++
            }
            const stringStart=j+1
            const length= +str.slice(i,j)

            j=j+length+1
            res.push(str.slice(stringStart,j))
            i=j-1

      

            

        }
        return res
    }

}
