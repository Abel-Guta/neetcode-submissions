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
            tail=tail.next
            length++
            
        }


        if (n===length){
            head=head.next
            return head

        }
        let cur=head.next
        let prev=head
        let start=length-1


        while(cur){
            if(start===n){
                prev.next=cur.next
                return head
                }
            cur=cur.next
            prev=prev.next
            start--

        }
        return head
    }
}
