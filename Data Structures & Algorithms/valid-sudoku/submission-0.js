class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i=0;i<board.length;i++){
            let seen=new Set()
            for (let j=0;j<board[i].length;j++){
                const value=board[i][j]
                if(value===".") continue
                if(seen.has(value)) return false
                else seen.add(value)
            }
        }

        for (let i=0;i<board[0].length;i++){
            let seen=new Set()
            for (let j=0;j<board.length;j++){
                const value=board[j][i]
                if(value===".") continue
                if(seen.has(value)) return false
                else seen.add(value)
            }
        }


        for (let i=0;i<board.length;i+=3){
            for (let j=0;j<board[i].length;j+=3){
                 let seen=new Set()
                for (let x=0;x<3;x++){
                    
                    for (let y=0;y<3;y++){
                        const value=board[i+x][j+y]
                        if(value===".") continue
                        if(seen.has(value)) return false
                        else seen.add(value)

                    }

                }
            }
        }

        return true

    
    }
}
