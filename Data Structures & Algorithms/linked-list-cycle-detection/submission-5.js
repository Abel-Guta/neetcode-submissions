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

        let l= head
        let r=head

        while (r && r.next){
            r= r.next.next
            l=l.next

            if (l===r) return true
            else if(r === null) return false
        }
        return false
    }
}
