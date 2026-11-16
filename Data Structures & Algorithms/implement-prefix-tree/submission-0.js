class PrefixTree {
    constructor() {
        this.children=new Map()
        this.endOfWord=false
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur=this
        for(let i=0;i<word.length;i++){
            const ch=word[i]
            if(cur.children.has(ch)){
                
                 cur=cur.children.get(ch)

            }
            else{
                 cur.children.set(ch,(new PrefixTree()))
                
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
            if(!cur.children.has(ch))return false 
            else{
                if (i===word.length-1 &&cur.children.get(ch).endOfWord===true )return true
                cur=cur.children.get(ch)

            } 
           

        }
        return false
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur=this
           for(let i=0;i<prefix.length;i++){
            const ch=prefix[i]
            if(!cur.children.has(ch))return false 
            else{
                cur=cur.children.get(ch)

            } 
           

        }
        return true

    }
}
