import { isSymmetric } from "./SymmetricTree";
import { TreeNode } from "./util/TreeNode";

describe("Symmetric Tree", () => {
  test("空のツリーの場合は対称と見なす", () => {
    expect(isSymmetric(null)).toBe(true);
  });

  test("単一ノードのツリーの場合は対称と見なす", () => {
    const root = new TreeNode(1);
    expect(isSymmetric(root)).toBe(true);
  });

  test("対称なツリー [1,2,2,3,4,4,3] は対称と見なす", () => {
    // 対称なツリー:
    //      1
    //     / \
    //    2   2
    //   / \ / \
    //  3  4 4  3
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3))
    );

    expect(isSymmetric(root)).toBe(true);
  });

  test("対称でないツリー [1,2,2,null,3,null,3] は対称でないと見なす", () => {
    // 対称でないツリー:
    //      1
    //     / \
    //    2   2
    //     \   \
    //      3   3
    const root = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(2, null, new TreeNode(3))
    );

    expect(isSymmetric(root)).toBe(false);
  });

  test("対称なツリー [1,2,2,null,3,3,null] は対称と見なす", () => {
    // 対称なツリー:
    //      1
    //     / \
    //    2   2
    //     \   /
    //      3 3
    const root = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(2, new TreeNode(3), null)
    );

    expect(isSymmetric(root)).toBe(true);
  });

  test("対称でないツリー [1,2,3] は対称でないと見なす", () => {
    // 対称でないツリー:
    //      1
    //     / \
    //    2   3
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

    expect(isSymmetric(root)).toBe(false);
  });

  test("対称でないツリー [5,4,1,null,1,null,4,2,null,2,null] は対称でないと見なす", () => {
    // 対称でないツリー:
    //        5
    //       / \
    //      4   1
    //       \   \
    //        1   4
    //       /   /
    //      2   2
    const root = new TreeNode(
      5,
      new TreeNode(4, null, new TreeNode(1, new TreeNode(2), null)),
      new TreeNode(1, null, new TreeNode(4, new TreeNode(2), null))
    );

    expect(isSymmetric(root)).toBe(false);
  });

  test("対称なツリー [1,2,2,3,null,null,3] は対称と見なす", () => {
    // 対称なツリー:
    //      1
    //     / \
    //    2   2
    //   /     \
    //  3       3
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), null),
      new TreeNode(2, null, new TreeNode(3))
    );

    expect(isSymmetric(root)).toBe(true);
  });
});
