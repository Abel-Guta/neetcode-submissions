/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {


        if(!root)return []

        const queue=[root]
        const output=[]

        while(queue.length>0){
            const length=queue.length
            const element=[]

            for(let i=0;i<length;i++){
                let cur=queue.shift()

            
                element.push(cur.val)
                if(cur.left) queue.push(cur.left)
                if(cur.right) queue.push(cur.right)

            }
            

            output.push([element])

          
        }

        return output







      
           
        
    }
}
