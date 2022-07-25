// Inorder 2 Pointer Solution

function inOrder(root: TreeNode){
        
   if(root === null) return null;
    else {
        var result = new Array();
        function traverse(node: TreeNode){
            node.left && traverse(node.left);
            result.push(node.val);
            node.right && traverse(node.right);
        }
        traverse(root);
        return result;
    }
}


function findTarget(root: TreeNode | null, k: number): boolean {
    
    const s = inOrder(root);
    
    let left = 0, right = s.length - 1;
    
    while(left < right){
        if(s[left] + s[right] == k) return true;
        else if(s[left] + s[right]< k) left++;
        else right--;
    }
    
    return false;
};

// DFS Solution

function findTarget(root: TreeNode | null, k: number): boolean {
    
    let m = new Map<number, boolean>();
    
    return dfs(root, k, m);
};

function dfs (root: TreeNode | null, k: number, m: Map<number ,boolean>) {
    
    if(root === null) return;
    
    if(m.has(k - root.val)) return true;
    
    m.set(root.val, true);
    
    return dfs(root.left,k ,m) || dfs(root.right,k ,m) || false;
}
