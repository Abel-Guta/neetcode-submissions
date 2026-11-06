class MinStack {
    constructor() {
        this.Arr=[]
        this.minArr=[]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const minimum=this.minArr.length===0?val:Math.min(val,this.minArr.at(-1))
        this.minArr.push(minimum)
       return this.Arr.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.minArr.pop()

       return  this.Arr.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.Arr.at(-1)
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minArr.at(-1)
    }
}
