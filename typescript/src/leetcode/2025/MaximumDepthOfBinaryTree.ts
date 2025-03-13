/**
 * Definition for a binary tree node.
 */
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function maxDepth(root: TreeNode | null): number {
  if (root == null) return 0;

  // 基底ケース
  if (root?.left == null && root?.right == null) {
    return 1;
  }

  let leftDepth: number = maxDepth(root.left);
  let rightDepth: number = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}
