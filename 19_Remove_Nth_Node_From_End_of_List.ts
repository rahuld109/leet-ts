function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let fast = head, slow = head;
	while (n--) {
	  fast = fast.next;
	}
    
	if (!fast) return head.next;
	
    while (fast.next) {
	  fast = fast.next;
	  slow = slow.next;
	}
    slow.next = slow.next.next;
	
    return head;
};
