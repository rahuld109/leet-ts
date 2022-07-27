function middleNode(head: ListNode | null): ListNode | null {
    
    let slow: ListNode = head;
    let fast: ListNode = head;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    return slow;
};
