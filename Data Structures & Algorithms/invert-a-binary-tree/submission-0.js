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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return null

        function inverse(node){
            if (!node.right && !node.left) return 
            let cur=node
            const nodeHolder=cur.right
            cur.right=cur.left
            cur.left=nodeHolder
            inverse(cur.right)
            inverse(cur.left)

        }
        inverse(root)

       
     
        return root
    }
}
