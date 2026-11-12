class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let l=0
        let maxDuplicate=0
        const freqCount=new Map()
        let maxLength=0
    



        for (let r=0;r<s.length;r++){

            freqCount.set(s[r],(freqCount.get(s[r])??0)+1)

            if (freqCount.get(s[r])>maxDuplicate){
                maxDuplicate=freqCount.get(s[r])

            }

            while((r-l+1)-maxDuplicate >k){
                freqCount.set(s[l],freqCount.get(s[l])-1)
                l++
            }

            if(maxLength<(r-l+1)){
                maxLength=r-l+1
             

            }

            

        }


        return  maxLength



    }
}
