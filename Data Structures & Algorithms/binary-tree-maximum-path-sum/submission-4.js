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
    maxPathSum(root) {
        let maxSum=-Infinity
        function pathSum(node){
            if(!node)return 0

        const left=Math.max(0,pathSum(node.left))
        const right=Math.max(0,pathSum(node.right))
        maxSum=Math.max(maxSum,node.val+left+right)


        return node.val +Math.max(left,right)
        }
        pathSum(root)
        return maxSum
    }
}
