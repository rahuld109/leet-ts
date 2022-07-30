function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    
    let dummy = new ListNode();
    let temp = dummy, carry = 0;
    
    while(l1 || l2 || carry){
        let sum = 0;
        
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2){
            sum += l2.val;
            l2 = l2.next;
        }
        
        sum += carry;
        carry = Math.floor(sum / 10);
        
        let newNode = new ListNode(sum % 10);
        
        temp.next = newNode;
        temp = temp.next;
    }
    
    return dummy.next;
};
