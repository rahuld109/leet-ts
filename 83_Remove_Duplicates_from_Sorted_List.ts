function deleteDuplicates(head: ListNode | null): ListNode | null {
    let P = head;
    while(P && P.next){
        if(P.val === P.next.val) {
            P.next = P.next.next;
        } else {
            P = P.next;
        }
    }
    return head;
};
