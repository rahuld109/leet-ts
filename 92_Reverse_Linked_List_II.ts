function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let pos = 1, curr = head, start = head;
    while(pos < left) {
        start = curr;
        curr = curr.next;
        pos += 1;
    }
    let newList = null, tail = curr;
    while(pos >= left && pos <= right){
        const next: ListNode = curr.next;
        curr.next = newList;
        newList = curr;
        curr = next;
        pos += 1;
    }
    start.next = newList;
    tail.next = curr;
    return left > 1 ? head : newList
};
