import { TreeNode } from "./util/TreeNode";

export function isSymmetric(root: TreeNode | null): boolean {
  if (root == null) return true;
  if (root.left == null && root.right == null) return true;

  return checkNode(root.left, root.right);
}

function checkNode(left: TreeNode | null, right: TreeNode | null): boolean {
  // どちらもnullの場合は対称
  if (left == null && right == null) return true;

  // どちらかがnullの場合は対称ではない
  if (left == null || right == null) return false;

  // 左右違う場合は対称ではない
  if (left.val !== right.val) return false;

  // 左の左と右の右が同じ かつ　左の右と右の左が同じ場合はtrue
  return checkNode(left.left, right.right) && checkNode(left.right, right.left);
}
