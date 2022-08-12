// Optimal | Floyd's Tortoise And Hare Algorithm: Time O(n) Space O(1)
function hasCycle(head: ListNode | null): boolean {
    if(head === null) return false;
    let Hare: ListNode = head, Tortoise: ListNode = head;
    
    while(Hare && Hare.next){
        Hare = Hare.next.next;
        Tortoise = Tortoise.next;
        if(Hare === Tortoise) {
            return true;
        }
    }
    
    return false;
};
