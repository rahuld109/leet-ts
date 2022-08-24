function rightSideView(root: TreeNode | null): number[] {
    if(!root) return [];
    let result = [], queue = [root];
    while(queue.length){
        let length = queue.length, level = 0, currentNode;
        while(level < length){
            currentNode = queue.shift();
            if(currentNode.left) {
                queue.push(currentNode.left);
            }
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
            level++
        }
        result.push(currentNode.val)
    }
    return result
};
