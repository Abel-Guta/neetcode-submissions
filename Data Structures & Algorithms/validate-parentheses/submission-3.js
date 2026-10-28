class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pair=new Map([
            [")","("],
            ["}","{"],
            ["]","["]
        ])
        const stack=[]


        for (const ch of s){
            if(pair.has(ch)){
                if (pair.get(ch)!==stack.at(-1)){
                    return false
                }
                stack.pop()
            }
            else{
                stack.push(ch)

            }

            

           


        }
        return stack.length===0


    }
}
