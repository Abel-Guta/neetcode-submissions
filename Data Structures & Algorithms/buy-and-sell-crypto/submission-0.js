class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice=prices[0]
        let maxProfit=0

        for (let i=0;i<prices.length;i++){

            
            const profit=prices[i]-minPrice
            maxProfit=Math.max(profit,maxProfit)
            minPrice=Math.min(prices[i],minPrice)
        }
        return maxProfit
    }
}
