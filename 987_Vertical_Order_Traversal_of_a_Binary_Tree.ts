function verticalTraversal(root: TreeNode | null): number[][] {
    const queue: [TreeNode | null, number][] = [[root, 500]]
    let result = [];
    
    while(queue.length) {
        let currlength = queue.length;
        
        let M = new Map();
        
        while(currlength){
            currlength--;
            
            const [node, pos] = queue.shift();
            
            if(!node) continue;
            
            if(!M.has(pos)) {
                M.set(pos, []);
            }
            
            M.get(pos).push(node.val);
            
            queue.push([node.left, pos -1], [node.right, pos + 1])
        }
        
        for(let [pos, value] of M){
            if(!result[pos]) {
                result[pos] = [];
            }
            
            result[pos] = [...result[pos], ...value.sort((a,b) => a - b)];
        }
    }
    
    return result.filter(item => item);
};
