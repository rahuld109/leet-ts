type Entry = {
    value: string,
    timestamp: number
}

class TimeMap {
    entries: Map<string, Entry[]>
    
    constructor() {
        this.entries = new Map<string, Entry[]>();
    }

    set(key: string, value: string, timestamp: number): void {
        const entry: Entry = {value, timestamp};
        const e = this.entries.get(key);
        
        if (e){
            e.push(entry);
        }else {
            this.entries.set(key, [entry])
        }

    }

    get(key: string, timestamp: number): string {
        const e = this.entries.get(key);
        
        if (!e || timestamp < e[0].timestamp) {
            return ""
        }
        
        return this.findClosestEntry(e, timestamp, 0, e.length - 1)
    }

    findClosestEntry(e: Entry[], timestamp: number, left: number, right: number): string {
        if (left > right) {
            return e[right].value
        }
        
        const mid = Math.floor((left + right) / 2);

    
        if (timestamp < e[mid].timestamp) {
            return this.findClosestEntry(e, timestamp, left, mid - 1)
        } else {
            return this.findClosestEntry(e, timestamp, mid + 1, right)
        }
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
