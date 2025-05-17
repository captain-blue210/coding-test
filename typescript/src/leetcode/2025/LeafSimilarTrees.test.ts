import { leafSimilar } from "./LeafSimilarTrees";
import { TreeNode } from "./util/TreeNode";

/** ───────────────────────
 *  レベル順配列 → 二分木を生成するユーティリティ
 *  例: [3,5,1,6,null,9,8] → TreeNode
 *  ─────────────────────── */
function buildTree(arr: (number | null)[]): TreeNode | null {
  if (!arr.length) return null;

  const root = new TreeNode(arr[0]!);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (!node) continue; // null プレースホルダをスキップ

    // 左子
    const leftVal = arr[i++];
    if (leftVal !== undefined) {
      if (leftVal !== null) {
        node.left = new TreeNode(leftVal);
        queue.push(node.left);
      } else {
        queue.push(null);
      }
    }

    // 右子
    const rightVal = arr[i++];
    if (rightVal !== undefined) {
      if (rightVal !== null) {
        node.right = new TreeNode(rightVal);
        queue.push(node.right);
      } else {
        queue.push(null);
      }
    }
  }
  return root;
}

/* ──────────────────────────────
 *  公式サンプル & 追加ケースでテスト
 * ────────────────────────────── */
describe("leafSimilar", () => {
  it("例 1: 葉が同一 (true)", () => {
    const root1 = buildTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
    const root2 = buildTree([
      3,
      5,
      1,
      6,
      7,
      4,
      2,
      null,
      null,
      null,
      null,
      null,
      null,
      9,
      8,
    ]);
    expect(leafSimilar(root1, root2)).toBe(true);
  });

  it("例 2: 単一ノード同士で同じ値 (true)", () => {
    expect(leafSimilar(buildTree([1]), buildTree([1]))).toBe(true);
  });

  it("例 3: 単一ノード同士で異なる値 (false)", () => {
    expect(leafSimilar(buildTree([1]), buildTree([2]))).toBe(false);
  });

  it("例 4: [1,2] と [2,2] は葉が同一 (true)", () => {
    expect(leafSimilar(buildTree([1, 2]), buildTree([2, 2]))).toBe(true);
  });

  it("カスタム: 葉シーケンスが違う (false)", () => {
    const root1 = buildTree([1, 2, 3, 4, 5]);
    const root2 = buildTree([1, 2, 3, 4, 6]);
    expect(leafSimilar(root1, root2)).toBe(false);
  });
});
