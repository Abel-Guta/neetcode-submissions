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

    

        let have=0

        let l=0
        for (let r=0;r<s.length;r++){
            if (tCount.has(s[r])){
                have++

                if (have >=need){
                    while(l<r && (have >need || !tCount.has(s[l])) ){
                        if (tCount.has(s[l])){
                            have--
                        }
                        l++     
                }
                const currLength=r-l+1
                minLength=Math.min(currLength,minLength)
                if(minLength===currLength){
                    minStart=l
                }

               
                


            }
            }
            
            
           


        }

        return s.slice(l,l+minLength)

        
     

      



        

    }
}
