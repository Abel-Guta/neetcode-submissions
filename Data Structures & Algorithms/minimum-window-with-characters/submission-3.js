class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(s.length<t.length) return ""

        const tCount=new Map()
        const wCount=new Map()

        let need=0
        let have=0
        let minLength=Infinity
        let minStart=0

        for (const ch of t){
           if (tCount.has(ch)){
            tCount.set(ch,tCount.get(ch)+1)
           }
           else{
            tCount.set(ch,1)
            need++
           }

        }

        let l=0

        for (let r=0;r<s.length;r++){
            const right=s[r]
            wCount.set(right,(wCount.get(right)??0)+1)
            if (tCount.has(right) && tCount.get(right)===wCount.get(right))have++

            if(have===need){
                while(!(tCount.has(s[l])) || wCount.get(s[l])>tCount.get(s[l])){
                    wCount.set(s[l],(wCount.get(s[l]))-1)
                    l++


                }

                const curLength=r-l+1

                if(curLength<minLength){
                    minLength=curLength
                    minStart=l

                }




            }

        }

        
        return  minLength === Infinity?"":s.slice(minStart,minStart+minLength)
    }
}
