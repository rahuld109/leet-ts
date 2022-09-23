function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (head === null) return head;
	
    while(head.val === val) {
        head = head.next;
        if (head === null) return head;
    }
    
    let prev = head;
    let curr = head.next;
    
    while(curr !== null) {
        if (curr.val === val) {
            prev.next = curr.next;
        } else {
            prev = prev.next
        }
            curr = curr.next;
        }

    return head;
  
};
