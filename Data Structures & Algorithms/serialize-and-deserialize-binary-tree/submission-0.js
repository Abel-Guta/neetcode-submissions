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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        
        const preorder=[]

        function preOrd(node){
            if(!node){
                preorder.push("#") 
                return
                } 

            preorder.push(node.val)
            preOrd(node.left)
            preOrd(node.right)
        }
        preOrd(root)
        return preorder.join("*")
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode} 
     */
    deserialize(data) {

        const preorder=data.split("*")
        let i=0

        function build(value){
            if(value==="#") return null

            const nodeValue=new TreeNode(+value)
            nodeValue.left=build(preorder[i++])
            nodeValue.right=build(preorder[i++])

            return nodeValue


            

        }
        return build(preorder[i++])
        
    }
}
