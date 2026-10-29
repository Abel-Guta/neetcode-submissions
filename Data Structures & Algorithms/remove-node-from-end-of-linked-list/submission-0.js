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
        let length=0
        let tail=head

        while(tail){
            length++
            tail=tail.next
        }

        const k=n%length
        let first=head
        let second=head.next

        let cur=0
          if(k===0){
                    head=head.next
                    return head
                }

      
            while(second){
              
                cur++
                if(cur === k){
                    first.next=second.next



                }
                second=second.next
                first=first.next

            
        }
        return head


    }
}
