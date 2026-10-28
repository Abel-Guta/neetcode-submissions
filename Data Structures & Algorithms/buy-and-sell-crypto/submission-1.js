class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minSeen=prices[0]
        let maxProfit=0
        for (let i=0;i<prices.length;i++){
            minSeen=Math.min(prices[i],minSeen)
            const profit=prices[i]-minSeen
            maxProfit=Math.max(profit,maxProfit)
        }
        return maxProfit
    }
}
