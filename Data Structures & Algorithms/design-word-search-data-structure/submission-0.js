class WordDictionary {
    constructor() {
        this.children=new Map()
        this.endOfWord=false
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur=this

        for(let i=0;i<word.length;i++){
            const ch=word[i]
             if(cur.children.has(ch)){
                cur=cur.children.get(ch)
             }
             else{
                cur.children.set(ch,new WordDictionary())
                cur=cur.children.get(ch)
             }

        }
        cur.endOfWord=true
       
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur=this

        for(let i=0;i<word.length;i++){
            const ch=word[i]

            if(ch==="."){
                const next=word.slice(i+1)

                for (const child of cur.children.values()){
                    if(child.search(next))return true
                }
                
                return false
               


            }
            else{

                if(!cur.children.has(ch))return false
             
                else{
                    cur=cur.children.get(ch)
              
                }


            }


             
        }
       return cur.endOfWord===true
        
    }
}
