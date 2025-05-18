import { describe, expect, it } from "vitest";
import { searchBST } from "./SearchInABinarySearchTree";
import { TreeNode } from "./util/TreeNode";

describe("searchBST", () => {
  it("空の木の場合、nullを返す", () => {
    expect(searchBST(null, 5)).toBe(null);
  });

  it("値が見つかる場合、そのノードを返す", () => {
    const root = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(7)
    );
    const result = searchBST(root, 2);
    expect(result?.val).toBe(2);
    expect(result?.left?.val).toBe(1);
    expect(result?.right?.val).toBe(3);
  });

  it("値が見つからない場合、nullを返す", () => {
    const root = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(7)
    );
    const result = searchBST(root, 5);
    expect(result).toBe(null);
  });

  it("左側または右側にのみノードを持つ木", () => {
    const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), null), null);
    const result = searchBST(root, 1);
    expect(result?.val).toBe(1);
  });

  it("制約の範囲内の値を持つノードのテスト", () => {
    const root = new TreeNode(
      10000000,
      new TreeNode(1, null, null),
      new TreeNode(10000000, null, null)
    );
    const result = searchBST(root, 1);
    expect(result?.val).toBe(1);
  });
});
