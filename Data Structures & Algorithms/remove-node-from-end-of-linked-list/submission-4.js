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
        if(length===1)return null
        let prev=head
        let cur=head.next
        let count=1
        
        while(cur){
            if (length-n===count-1 && count===1){
                head=cur
                return head
            }
            else if(length-n===count){
                prev.next=cur.next
                return head
            }

            cur=cur.next
            prev=prev.next
            count++

        }
    }
}
