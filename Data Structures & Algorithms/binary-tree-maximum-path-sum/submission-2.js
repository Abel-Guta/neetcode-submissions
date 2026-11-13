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
        if(!root) return 0
     





        function path(node){
            if(!node ) return 0
            
            const left=Math.max(0,path(node.left))
            const right=Math.max(0,path(node.right))
            let curSum=node.val+left+right
            maxSum=Math.max(curSum,maxSum)

            return node.val+Math.max(left,right)
        }
        path(root)

        return maxSum

    }
}
