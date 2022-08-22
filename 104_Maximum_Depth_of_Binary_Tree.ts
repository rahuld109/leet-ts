// Time O(N) Space O(N)
function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;
    
    return DFS(root, 0)
}; 

function DFS(root: TreeNode | null, count : number): number {
    if(!root){
        return count;
    }
    
    count++;
    return Math.max(DFS(root.left, count), DFS(root.right, count))
}
