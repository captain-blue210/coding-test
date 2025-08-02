import { maxDepth } from './MaximumDepthOfBinaryTree';
import { TreeNode } from './util/TreeNode';

describe('Maximum Depth of Binary Tree', () => {
  test('[] should return 0', () => {
    expect(maxDepth(null)).toBe(0);
  });

  test('[1,null,2] should return 2', () => {
    const given: TreeNode = new TreeNode(1, null, new TreeNode(2));
    expect(maxDepth(given)).toBe(2);
  });

  test('[3,9,20,null,null,15,7] should return 3', () => {
    const given: TreeNode = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    );
    expect(maxDepth(given)).toBe(3);
  });
});
