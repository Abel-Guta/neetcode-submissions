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
        if(!root) return []
        const output=[]
         

        const queue=[root]
      

        while(queue.length>0){
            
              let n =queue.length
               const inner=[]

              for(let i=0;i<n;i++){
                let cur=queue.shift()
                inner.push(cur.val)
                if(cur.left)queue.push(cur.left)
                if(cur.right)queue.push(cur.right)
               

              }
              output.push(inner)

            

           

        }
        return output
    }
}
