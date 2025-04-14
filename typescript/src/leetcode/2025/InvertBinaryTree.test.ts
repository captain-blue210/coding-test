import { invertTree } from "./InvertBinaryTree";
import { TreeNode } from "./util/TreeNode";

describe("Invert Binary Tree", () => {
  test("空のツリーの場合はnullを返す", () => {
    expect(invertTree(null)).toBeNull();
  });

  test("単一ノードのツリーの場合は同じツリーを返す", () => {
    const root = new TreeNode(1);
    const result = invertTree(root);

    expect(result?.val).toBe(1);
    expect(result?.left).toBeNull();
    expect(result?.right).toBeNull();
  });

  test("シンプルなツリー [2,1,3] は [2,3,1] に反転される", () => {
    // 元のツリー:    2
    //              / \
    //             1   3
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));

    // 期待される結果: 2
    //                / \
    //               3   1
    const result = invertTree(root);

    expect(result?.val).toBe(2);
    expect(result?.left?.val).toBe(3);
    expect(result?.right?.val).toBe(1);
  });

  test("複雑なツリー [4,2,7,1,3,6,9] は [4,7,2,9,6,3,1] に反転される", () => {
    // 元のツリー:      4
    //                /   \
    //               2     7
    //              / \   / \
    //             1   3 6   9
    const root = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(7, new TreeNode(6), new TreeNode(9))
    );

    // 期待される結果:  4
    //                /   \
    //               7     2
    //              / \   / \
    //             9   6 3   1
    const result = invertTree(root);

    expect(result?.val).toBe(4);
    expect(result?.left?.val).toBe(7);
    expect(result?.right?.val).toBe(2);
    expect(result?.left?.left?.val).toBe(9);
    expect(result?.left?.right?.val).toBe(6);
    expect(result?.right?.left?.val).toBe(3);
    expect(result?.right?.right?.val).toBe(1);
  });

  test("不均衡なツリー [1,2,null,3] は [1,null,2,null,null,null,3] に反転される", () => {
    // 元のツリー:    1
    //              /
    //             2
    //            /
    //           3
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null);

    // 期待される結果: 1
    //                  \
    //                   2
    //                    \
    //                     3
    const result = invertTree(root);

    expect(result?.val).toBe(1);
    expect(result?.left).toBeNull();
    expect(result?.right?.val).toBe(2);
    expect(result?.right?.left).toBeNull();
    expect(result?.right?.right?.val).toBe(3);
  });
});
