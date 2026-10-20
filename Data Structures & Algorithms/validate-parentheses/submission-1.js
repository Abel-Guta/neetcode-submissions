class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const key=new Map([
            [")","("],
            ["}","{"],
            ["]","["]
        ])

        const stack=new Array()

        for (let i=0;i<s.length;i++){
            if (!(key.has(s[i]))){
                stack.push(s[i])
            }
            else if (stack.at(-1)===key.get(s[i])){
                stack.pop()
            }
        }

        return stack.length===0
    }
}
