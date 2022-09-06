function pruneTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null;
    }
    
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    
    if (root.left || root.right || root.val === 1) {
        return root;
    } else {
        return null;
    }   
};
