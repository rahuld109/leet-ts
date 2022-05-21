class MyHashMap {
  items: any = {};
  constructor() {
    this.items = {};
  }

  put(key: number, value: number): void {
    this.items[key] = value;
  }

  get(key: number): number {
    if (key in this.items) {
      return this.items[key];
    } else {
      return -1;
    }
  }

  remove(key: number): void {
    if (key in this.items) {
      delete this.items[key];
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
