function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    let currentSum = 0, match = false;
    
    function traverse(root: TreeNode | null): boolean {
        if(!root){
            return;
        }
        
        currentSum += root.val;
        
        if (!root.left && !root.right) {
            (currentSum === targetSum) && (match = true)
        }
        
        traverse(root.left);
        traverse(root.right);
        
        currentSum -= root.val;
    }
    
    traverse(root);
    
    
    return match;
};
