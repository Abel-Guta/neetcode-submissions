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
     * @return {boolean}
     */
    isValidBST(root) {
        if(!root) return true
        let validLeft=false
        let validRight=false

        if ((root.left && root.left.val<root.val)|| !root.left)validLeft=true
            
        
        if((root.right && root.right.val>root.val) || !root.right)validRight=true


        return validLeft && validRight && this.isValidBST(root.left) && this.isValidBST(root.right)


            
    }
}
