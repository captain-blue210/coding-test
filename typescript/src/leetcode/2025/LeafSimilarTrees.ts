import { TreeNode } from "./util/TreeNode";

export function leafSimilar(
  root1: TreeNode | null,
  root2: TreeNode | null
): boolean {
  const root1Leaves: number[] = [];
  const root2Leaves: number[] = [];

  recurcive(root1, root1Leaves);
  recurcive(root2, root2Leaves);

  if (root1Leaves.length !== root2Leaves.length) return false;
  return root1Leaves.every((v, i) => v === root2Leaves[i]);
}

function recurcive(node: TreeNode, leaves: number[]) {
  if (!node) return;

  if (!node.left && !node.right) {
    leaves.push(node.val);
    return;
  }

  recurcive(node.left, leaves);
  recurcive(node.right, leaves);
}
