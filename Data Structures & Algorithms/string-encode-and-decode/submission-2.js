class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded=''
        for (const str of strs){
            encoded+= str.length+"."+str
        }
        return encoded

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */

    
    decode(str) {
        let decoded=[]
        let l=0

        for (let r=0;r<str.length;r++){
            if(l<str.length && str[r] === "."){
                const length= +str.slice(l,r)
                l=r+1
                r+=length
                decoded.push(str.slice(l,r+1))
                l=r+1

                
            }


        }
      return decoded

        

    }
}
