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
        let maxSum=0
        if(!root) return 0
        let itsRoot=true





        function path(node){
            if(!node || (!itsRoot && node.val<0)) return 0
            itsRoot=false
            const left=path(node.left)
            const right=path(node.right)
            let curSum=node.val+left+right
            maxSum=Math.max(curSum,maxSum)

            return node.val+Math.max(left,right)
        }
        path(root)

        return maxSum

    }
}
