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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
         let cur=root
         let minNode=root

         while(cur){
            if(cur.val<minNode.val)minNode=cur
            if(p.val<=cur.val && q.val<=cur.val){
                if(p.val!==cur.val && q.val !==cur.val) cur=cur.left
                else cur=cur.right
               
                
            }
            else if(p.val>=cur.val && q.val>=cur.val){
                cur=cur.right
            }
            else return minNode

            
         }
         return minNode
    }
}
