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
     * @return {void}
     */
    reorderList(head) {


        let fast=head
        let slow=head

        while(fast && fast.next){
            fast=fast.next.next
            slow=slow.next
        }

        let second=slow.next
        slow.next=null
        let prev=null
        let next

        while(second){
            next=second.next
            second.next=prev
            prev=second
            second=next

        }

        second=prev

        let l=head
        let r=second
        let lholder
        let rholder

        while(r){
            lholder=l.next
            rholder=r.next
            l.next=r
            r.next=lholder
            r=rholder
            l=lholder
            

        }
        return head





    }
}
