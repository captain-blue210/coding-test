import { Node } from "./util/Node";

/**
 * Clone Graph - LeetCode 133
 *
 * 与えられた無向グラフの深いコピー（ディープコピー）を作成する。
 * グラフは隣接リスト表現で表される。
 *
 * @param node - グラフの開始ノード
 * @returns クローンされたグラフの開始ノード
 */
export function cloneGraph(node: Node | null): Node | null {
  if (node === null) return null;

  const visited: Map<number, Node> = new Map();

  const dfs = (node: Node): Node => {
    if (visited.has(node.val)) {
      return visited.get(node.val)!;
    }

    const cloned = new Node(node.val);
    visited.set(node.val, cloned);
    for (const neighbor of node.neighbors) {
      cloned.neighbors.push(dfs(neighbor));
    }
    return cloned;
  };

  return dfs(node);
}
