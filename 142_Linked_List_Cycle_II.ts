// Time O(n) Space O(n)
function detectCycle(head: ListNode | null): ListNode | null {
    if(head === null) return null
    let currentNode = head, S = new Set();
    while(!S.has(currentNode)){
        if(currentNode.next === null) return null
        S.add(currentNode)
        currentNode = currentNode.next
    }
    return currentNode;
};

// Optimal | Floyd's Tortoise And Hare Algorithm: Time O(n) Space O(1)
function detectCycle(head: ListNode | null): ListNode | null {
    if(head === null) return null;
    let Hare: ListNode = head, Tortoise: ListNode = head;
    let cycle: boolean = false;
    
    while(Hare && Hare.next){
        Hare = Hare.next.next;
        Tortoise = Tortoise.next;
        if(Hare === Tortoise) {
            cycle = true;
            break;
        }
    }

    if(!cycle) return null;
    
    while(head !== Hare){
        head = head.next;
        Hare = Hare.next;
    }
    return head;
};
