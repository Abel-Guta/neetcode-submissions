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

        if(lists.length===0) return null


        function mergeSort(l1,l2){
            let l=l1
            let r=l2
            let resHead=new ListNode()

            let i=resHead

            while(l&&r){
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

            i.next=l || r

            return resHead.next
        }


        while(lists.length>1){
            const conqured=[]
             for (let i=0;i<lists.length;i+=2){
                 if(i+1<lists.length){
                    conqured.push(mergeSort(lists[i],lists[i+1]))
                }
                else{
                    conqured.push(lists[i])
                }

             }
             lists=[...conqured]
               

        }

        return lists[0]



        

           
                
            
        }




        

    }

