import { TreeNode } from "./util/TreeNode";

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root == null) return null;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}
