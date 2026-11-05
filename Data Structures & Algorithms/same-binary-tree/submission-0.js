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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        function check(p,q){
            if(p && q){
            if (p.val !== q.val) return false

            
        }
        else if(!p && !q)return true
        else if ((p && !q )|| (!p && q)) return false
        

       
        return check(p.right,q.right) && check(p.left,q.left)
            
            
            
        }

        return check(p,q)
        
        
       


    }

 
}
