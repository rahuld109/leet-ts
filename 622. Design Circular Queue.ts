class MyCircularQueue {
    private q: number[]
    private cnt: number
    private sz: number
    private headIdx: number

    constructor(k: number) {
        this.q = []
        this.cnt = 0
        this.sz = k
        this.headIdx = 0
    }

    enQueue(value: number): boolean {
        if (this.isFull()) return false
        this.q[(this.headIdx + this.cnt) % this.sz] = value
        this.cnt += 1
        return true
    }

    deQueue(): boolean {
        if (this.isEmpty()) return false
        this.headIdx = (this.headIdx + 1) % this.sz
        this.cnt -= 1
        return true
    }

    Front(): number {
        if (this.isEmpty()) return -1
        return this.q[this.headIdx]
    }

    Rear(): number {
        if (this.isEmpty()) return -1
        return this.q[(this.headIdx + this.cnt - 1) % this.sz]
    }

    isEmpty(): boolean {
        return this.cnt == 0
    }

    isFull(): boolean {
        return this.cnt == this.sz
    }    
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
