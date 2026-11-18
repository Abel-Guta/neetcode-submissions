class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        if(t.length>s.length) return ""
        const tMap=new Map()
        const wMap=new Map()



        for(const ch of t){
            tMap.set(ch,(tMap.get(ch)??0)+1)
        }


         let need=tMap.size
         let have=0

         let l=0
         let minLength=Infinity
         let minStart=0

         for(let r=0;r<s.length;r++){
            let right=s[r]
            wMap.set(right,(wMap.get(right)??0)+1)
            if(wMap.get(right)===tMap.get(right))have++

            if(have===need){
                while(!tMap.has(s[l]) || wMap.get(s[l])>tMap.get(s[l])){
                    wMap.set(s[l],wMap.get(s[l])-1)
                    l++
                }

                const curLength=r-l+1
                if(curLength<minLength){
                    minLength=curLength
                    minStart=l
                }


            }

         }

         return minLength===Infinity?"":s.slice(minStart,minStart+minLength)





         

        


    }
}
