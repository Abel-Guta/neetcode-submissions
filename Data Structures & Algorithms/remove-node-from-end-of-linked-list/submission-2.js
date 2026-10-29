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

     
        let first=head
        let second=head.next

        let cur=length
          if(n===length){
                    head=head.next
                    return head
                }

      
            while(second){
              
                cur--
                if(cur === n){
                    first.next=second.next
                    break



                }
                second=second.next
                first=first.next

            
        }
        return head


    }
}
