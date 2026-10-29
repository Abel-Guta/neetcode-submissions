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
        let next
        let prev=null

        while (second){
        next=second.next
        second.next=prev
        prev=second
        second=next
        
            
        }
        second=prev
        let first=head
        let firstHolder
        let secondHolder


        while (first && second){
            firstHolder=first.next
            secondHolder=second.next
            first.next=second
            second.next=firstHolder
            first=firstHolder
            second=secondHolder
            
        }
        return head

    }
}
