// Iterative method 
function reverseList(head: ListNode | null): ListNode | null {
    let newHead: ListNode = null;;
    
    while(head !== null){
        let next: ListNode = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }
    
    return newHead;
};
