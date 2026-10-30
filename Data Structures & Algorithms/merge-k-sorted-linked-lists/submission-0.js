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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        function mergeSort(lL1,lL2){
            let l=lL1
            let r=lL2
            let resHead=new ListNode()
            let i=resHead


            while(l && r){
                if(l.val<=r.val){
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

            i.next = l||r

           

            return resHead.next
        }


        if(lists.length===0)return null
        if(lists.lenght===1)return lists[0]


        
    
            let j=1
            let merged=lists[0]
            
            while(j<lists.length){
                merged=mergeSort(merged,lists[j])
               
                j++

            }

            return merged



    }
}
