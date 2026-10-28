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
        // go through the list and set the next nodes prev to the current one and move one step until we reach the last one which will be our right pointer 
        // with another pointer starting at the head hold the current node next value insde a  placeholder then attach the next of the current node to the node where the right pointer is at move the left to new next then set it's next to the lace holder then ove ones step and move the right pointer one step back using the prev u did and do this all over again 


        let r=head
        let i=0
        while (r){
          
            r.ind=i++
           
          
            
              if(r.next===null){
                 break

            }
              r.next.prev=r
            r=r.next

        }

        let l=head
        let nodeHolder
        while (l && r && (l.ind<r.ind)){
            nodeHolder=l.next
            r.prev.next=null
            l.next=r
            l=l.next
            l.next=nodeHolder
            l=l.next
            r=r.prev
        }
        if(l && r && (l.ind >=r.ind)) l.next=null

    }
}
