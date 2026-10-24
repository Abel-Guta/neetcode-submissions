class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        if(t.length>s.length){
            return ""
        }


        let need=0
        const tCount=new Map()
        let minLength=Infinity
        let minStart


        for (const ch of t){
            tCount.set(ch,(tCount.get(ch)??0)+1)
            need++
        }

    
        const wCount=new Map()
        let have=0

        let l=0
        for (let r=0;r<s.length;r++){
            wCount.set(s[r],(wCount.get(s[r])??0)+1)
            if (tCount.has(s[r]) && tCount.get(s[r])===wCount.get(s[r])){
                have++

                if (have ===need){
                    while(l<=r && (!tCount.has(s[l]) || wCount.get(s[l])>tCount.get(s[l])) ){
                        wCount.set(s[l],(wCount.get(s[l]))-1)
                        l++     
                }
                const currLength=r-l+1
                if(currLength<minLength){
                    minStart=l
                    minLength=currLength
                }

               
                wCount.set(s[l],(wCount.get(s[l]))-1)
                have--
                l++


            }
            }
            
            
           


        }

        if (minLength != Infinity) return s.slice(minStart,minStart+minLength)
        else return ""

        
     

      



        

    }
}
