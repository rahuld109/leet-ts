// Time O(n) and Space O(1)
function flatten(head: Node | null): Node | null {
    if(!head) return head;
    
    let currentNode: Node = head;
    
    while(currentNode){
        if(!currentNode.child){
            currentNode = currentNode.next
        }else{
            let tail = currentNode.child;
            
            while(tail.next){
               tail = tail.next
            }
            
            tail.next = currentNode.next
            if(tail.next !== null){
                tail.next.prev = tail
            }
            
            currentNode.next = currentNode.child;
            currentNode.next.prev = currentNode;
            currentNode.child = null;
        }
    }
    
    return head
};
