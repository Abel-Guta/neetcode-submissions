class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // start at ind 0
        // put it in a set
        // initiate count and add 1
        // check the value of the next ind if it is seen in the set if it is update max count and strat count from 0 empty the seen set ad we retrart again if not we add it to the set and update count until we finish iterating on all of the values or a duplicat is found
    // return max count
    let seen=new Set()
    let count=0
    let maxCount=0


    for (let i=0;i<s.length;i++){
        
        if(!seen.has(s[i])){
            seen.add(s[i])
            count++
            maxCount=Math.max(count,maxCount)
           
        }
        else{
            count=1
            seen=new Set()
            seen.add(s[i])

        }
        

    
    }
    return maxCount
    }
}
