class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairMap= new Map([
            [")","("],
            ["}","{"],
            ["]","["]
        ])
        const stack=[]


        for(const ch of s){
            if(pairMap.has(ch)){
               const recent= stack.at(-1)
               if(pairMap.get(ch)===recent)stack.pop()
               else{
                return false 
               }
            }
            else{
                stack.push(ch)
            }
        }

        return stack.length === 0
    }
}
