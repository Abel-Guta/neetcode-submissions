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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let tail=head
        let length=0
        while(tail){
            length++
            tail=tail.next
        }
        if(length===1)return null
        let prev=head
        let cur=head.next
        let count=length-1
        
        while(cur){
            if (count===n){
                prev.next=cur.next
                return head
            }

            cur=cur.next
            prev=prev.next
            count--

        }
    }
}
