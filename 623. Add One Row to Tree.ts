/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
    
  if (!root) return null;

  if (depth === 1) return new TreeNode(val, root);

  const traverse = (node: TreeNode | null, val: number, depth: number) => {
    if (!node) return;

    if (depth === 1) {
      node.left = new TreeNode(val, node.left);
      node.right = new TreeNode(val, null, node.right);
    } else {
      if (node.left) traverse(node.left, val, depth - 1);
      if (node.right) traverse(node.right, val, depth - 1);
    }
  };

  traverse(root, val, depth - 1);
  return root;
    
};

