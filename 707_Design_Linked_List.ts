class MyListNode {
  public value: number;
  public next: MyListNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class MyLinkedList {
  private size: number = 0;
  private head: MyListNode = new MyListNode(0);

  constructor() {}

  get(index: number): number {
    if (index < 0 || index >= this.size) return -1;

    // find target node and take its value
    let target: MyListNode = this.head;
    for (let i = 0; i < index + 1; i++) {
      const next = target.next;

      if (next !== null) {
        target = next;
        continue;
      }

      return -1;
    }

    return target.value;
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val);
  }

  addAtTail(val: number): void {
    this.addAtIndex(this.size, val);
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size && index < 0) return;

    // find previous node to index
    let previous: MyListNode = this.head;
    for (let i = 0; i < index; i++) {
      const next = previous.next;

      if (next !== null) {
        previous = next;
        continue;
      }

      return;
    }

    // create and add new node
    const newNode = new MyListNode(val);
    newNode.next = previous.next;
    previous.next = newNode;
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index >= this.size || index < 0) return;

    // find previous node to index
    let previous: MyListNode = this.head;
    for (let i = 0; i < index; i++) {
      const next = previous.next;

      if (next !== null) {
        previous = next;
        continue;
      }

      return;
    }

    // delete target node
    previous.next = previous.next?.next || null;
    this.size--;
  }
}
