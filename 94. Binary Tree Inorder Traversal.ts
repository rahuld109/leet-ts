function inorderTraversal(root: TreeNode | null): number[] {
    let result = [];
    
    function traverse(node: TreeNode | null): void {
        if (node) {
            traverse(node.left);
            result.push(node.val);
            traverse(node.right);
        }
    }
    
    traverse(root);
        
    return result;

};
