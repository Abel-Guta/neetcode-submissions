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
        const visited= new set()
        while(head){
            if(head.visted===true)return true
            head.visted=true
            if(head.next === null) return false
            head=head.next

        }

    }
}
