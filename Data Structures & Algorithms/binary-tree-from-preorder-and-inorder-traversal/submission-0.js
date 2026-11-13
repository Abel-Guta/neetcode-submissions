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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {

        const indexof=new Map()
        inorder.forEach((val,i)=>indexof.set(val,i))
        let count=0

        const build=(lo,hi)=>{
            if(lo>hi) return null
            const mid=indexof.get(preorder[count])
            const root=new TreeNode(preorder[count++])

            root.left=build(lo,mid-1)
            root.right=build(mid+1,hi)

            return root


        }

        return build(0,inorder.length-1)

        



        
        

   


    }
}
