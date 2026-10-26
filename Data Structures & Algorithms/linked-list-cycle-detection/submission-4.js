/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let left=head
        let right=head
        
        while(left && right){
            left=left.next
            if(right.next===null)return false
            right=right.next.next
            if(left === right) return true
        
           

        }
        return false

    }
}
