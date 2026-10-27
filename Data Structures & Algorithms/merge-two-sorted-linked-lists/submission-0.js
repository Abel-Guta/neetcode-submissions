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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let l=list1
        let r=list2

        let merged=new ListNode()
        let i=merged
        while (l || r){
            if(l===null){
                i.next=r
                break
            }
            if (r===null){
                i.next=l
                break
            }
            if(l.val<r.val){
               
                    i.next=l
                    l=l.next
                    i=i.next
                    
              
            }
            else{
                    i.next=r
                    r=r.next
                    i=i.next
            }
            


        }
        return merged.next
    }
 
}
