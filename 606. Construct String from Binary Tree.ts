function tree2str(root: TreeNode | null): string {

    let result = '';
    
    function preOrder(root: TreeNode | null): void {
        if (!root) {
            return;
        }
        
        result += root.val;
        
        if (!root.left && !root.right) {
            return;
        }
        
        result += '(';
        if (root.left != null) {
            preOrder(root.left);
        }
        result += ')';
    
        if (root.right != null) {
            result += '(';
            preOrder(root.right);
            result += ')';
        }    
    }
    
    preOrder(root);
    
    return result;
};
