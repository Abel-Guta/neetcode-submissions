class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
   let l=0
   let maxLength=0
   const freqMap=new Map()
   let maxCount=0
   let maxChar

   for (let i=0;i<s.length;i++){
    
    freqMap.set(s[i],(freqMap.get(s[i])??0)+1)
    if (freqMap.get(s[i])>maxCount){
        maxCount=freqMap.get(s[i])
        maxChar=s[i]
    }

    while((i-l+1)-maxCount>k){
        freqMap.set(s[l],freqMap.get(s[l])-1)
        
       
        l++


    }

    maxLength=Math.max(i-l+1,maxLength)

   


   }
   return maxLength


    }
}
