// Time O(N) Space(N)

function levelOrder(root: Node | null): number[][] {
    let res: number[][] = [];
    if(!root) return res;
    
    const Q = [root];
    
    while(Q.length !== 0){
        let sizeOfLevel = Q.length;
        let currentLevelNodes: number[] = [];
        
        while(sizeOfLevel !== 0){
            const currentNode = Q.shift();
            const childs = currentNode.children
            currentLevelNodes.push(currentNode.val);
            
            for(let i = 0; i < childs.length; i++){
                Q.push(childs[i])
            }
            sizeOfLevel--;
        }
        
        res.push(currentLevelNodes);
    }
    
    return res;
};
