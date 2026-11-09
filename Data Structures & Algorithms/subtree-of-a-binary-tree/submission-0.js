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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!root) return false
        function isSameTree(node1,node2){
            if(!node1 && !node2) return true
            else if(!node1 || !node2)return false
            else if(node1.val !== node2.val) return false 

            else{
               return  isSameTree(node1.left,node2.left) && isSameTree(node1.right,node2.right)
                
            }



        }
        if(isSameTree(root,subRoot))return true
        else return this.isSubtree(root.left,subRoot) || this.isSubtree(root.right,subRoot)

        
    }
}
