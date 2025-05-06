import { TreeNode } from "./util/TreeNode";

export function getMinimumDifference(root: TreeNode | null): number {
  if (root === null) return 0;

  // 中順走査（in-order traversal）で値を配列に格納
  const values: number[] = [];

  const inOrderTraversal = (node: TreeNode | null) => {
    if (node === null) return;

    inOrderTraversal(node.left);
    values.push(node.val);
    inOrderTraversal(node.right);
  };

  inOrderTraversal(root);

  // 配列の要素が1つ以下の場合は差を計算できないので0を返す
  if (values.length <= 1) return 0;

  // 隣接する値の差を計算し、最小値を見つける
  let minDiff = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < values.length; i++) {
    const diff = Math.abs(values[i] - values[i - 1]);
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}
