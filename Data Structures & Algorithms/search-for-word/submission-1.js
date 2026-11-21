class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const seen=new Set()
      
     


        function search(i,j,k){
            if(k>=word.length)return true

            if(i<0 || j<0 ||i===board.length || j===board[0].length || board[i][j] !==word[k] || seen.has(`${i},${j}`))return false

            seen.add(`${i},${j}`)
            
            const result= search(i,j-1,k+1) ||
            search(i+1,j,k+1) ||
            search(i,j+1,k+1) ||
            search(i-1,j,k+1)

            seen.delete(`${i},${j}`)
            return result



        }
        for (let row=0;row<board.length;row++){
            for(let col=0;col<board[0].length;col++){
                if(search(row,col,0))return true             
            }
        }
        return false

       

        
    }
}
