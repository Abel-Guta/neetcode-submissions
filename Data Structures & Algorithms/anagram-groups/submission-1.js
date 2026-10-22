class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramMap=new Map()
        const res=[]

        

        for (const str of strs){
            const char=new Array(26).fill(0)
            for (const ch of str){
                char[ch.charCodeAt(0)-97]++
            }

            const key=char.join("-")

            if (anagramMap.get(key))anagramMap.get(key).push(str)

            else{
                anagramMap.set(key,[str])
            }


            



        }
        for (const value of anagramMap.values()){
            res.push(value)
        }
        return res
        
    }
}
