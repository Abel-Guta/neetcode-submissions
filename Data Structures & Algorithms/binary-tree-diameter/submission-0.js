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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let maxDiameter=0

        function height(node){
            if(!node) return -1
            const left=height(node.left)
            const right=height(node.right)
            const diameter=(1+left)+ (1+right)
            maxDiameter=Math.max(maxDiameter,diameter)


            return 1+Math.max(left,right)


        }
        height(root)
        return maxDiameter
    }
}
