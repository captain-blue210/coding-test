import { getMinimumDifference } from "./MinimumAbsoluteDifferenceInBST";
import { TreeNode } from "./util/TreeNode";

describe("Minimum Absolute Difference in BST", () => {
  test("空のツリーの場合は0を返す", () => {
    expect(getMinimumDifference(null)).toBe(0);
  });

  test("単一ノードのツリーの場合は0を返す", () => {
    const root = new TreeNode(1);
    expect(getMinimumDifference(root)).toBe(0);
  });

  test("シンプルなツリー [4,2,6] は最小差2を返す", () => {
    // 元のツリー:    4
    //              / \
    //             2   6
    const root = new TreeNode(4, new TreeNode(2), new TreeNode(6));
    expect(getMinimumDifference(root)).toBe(2);
  });

  test("より複雑なツリー [1,null,3,2] は最小差1を返す", () => {
    // 元のツリー:    1
    //                \
    //                 3
    //                /
    //               2
    const root = new TreeNode(1, null, new TreeNode(3, new TreeNode(2), null));
    expect(getMinimumDifference(root)).toBe(1);
  });

  test("バランスの取れたツリー [4,2,6,1,3,5,7] は最小差1を返す", () => {
    // 元のツリー:      4
    //                /   \
    //               2     6
    //              / \   / \
    //             1   3 5   7
    const root = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(6, new TreeNode(5), new TreeNode(7))
    );
    expect(getMinimumDifference(root)).toBe(1);
  });

  test("不均衡なツリー [5,4,7,3,null,null,8] は最小差1を返す", () => {
    // 元のツリー:      5
    //                /   \
    //               4     7
    //              /       \
    //             3         8
    const root = new TreeNode(
      5,
      new TreeNode(4, new TreeNode(3), null),
      new TreeNode(7, null, new TreeNode(8))
    );
    expect(getMinimumDifference(root)).toBe(1);
  });

  test("ノード間の差が大きいツリー [27,null,34,null,58,50,null,44] は最小差6を返す", () => {
    // 元のツリー:      27
    //                    \
    //                     34
    //                       \
    //                        58
    //                       /
    //                      50
    //                     /
    //                    44
    const root = new TreeNode(
      27,
      null,
      new TreeNode(
        34,
        null,
        new TreeNode(58, new TreeNode(50, new TreeNode(44), null), null)
      )
    );
    expect(getMinimumDifference(root)).toBe(6); // 50-44=6
  });
});
