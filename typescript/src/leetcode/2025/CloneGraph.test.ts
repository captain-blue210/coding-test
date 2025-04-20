import { describe, expect, it } from "vitest";
import { cloneGraph } from "./CloneGraph";
import { Node } from "./util/Node";

describe("Clone Graph", () => {
  it("should return null when input is null", () => {
    expect(cloneGraph(null)).toBeNull();
  });

  it("should clone a single node graph", () => {
    // 単一ノードのグラフを作成
    const node = new Node(1);

    // クローン作成
    const clonedNode = cloneGraph(node);

    // 検証
    expect(clonedNode).not.toBe(node); // 同一オブジェクトではない
    expect(clonedNode?.val).toBe(1);
    expect(clonedNode?.neighbors.length).toBe(0);
  });

  it("should clone a two-node graph", () => {
    // 2ノードのグラフを作成
    const node1 = new Node(1);
    const node2 = new Node(2);
    node1.neighbors.push(node2);
    node2.neighbors.push(node1);

    // クローン作成
    const clonedNode1 = cloneGraph(node1);

    // 検証
    expect(clonedNode1).not.toBe(node1);
    expect(clonedNode1?.val).toBe(1);
    expect(clonedNode1?.neighbors.length).toBe(1);

    const clonedNode2 = clonedNode1?.neighbors[0];
    expect(clonedNode2).not.toBe(node2);
    expect(clonedNode2?.val).toBe(2);
    expect(clonedNode2?.neighbors.length).toBe(1);
    expect(clonedNode2?.neighbors[0]).toBe(clonedNode1); // 循環参照の確認
  });

  it("should clone a graph with a cycle", () => {
    // サイクルを持つグラフを作成 (1 -> 2 -> 3 -> 1)
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    node1.neighbors.push(node2);
    node2.neighbors.push(node3);
    node3.neighbors.push(node1);

    // クローン作成
    const clonedNode1 = cloneGraph(node1);

    // 検証
    expect(clonedNode1?.val).toBe(1);
    expect(clonedNode1?.neighbors.length).toBe(1);

    const clonedNode2 = clonedNode1?.neighbors[0];
    expect(clonedNode2?.val).toBe(2);
    expect(clonedNode2?.neighbors.length).toBe(1);

    const clonedNode3 = clonedNode2?.neighbors[0];
    expect(clonedNode3?.val).toBe(3);
    expect(clonedNode3?.neighbors.length).toBe(1);
    expect(clonedNode3?.neighbors[0]).toBe(clonedNode1); // サイクルの確認
  });

  it("should clone a complex graph", () => {
    // 複雑なグラフを作成 (1 -- 2
    //                     |    |
    //                     4 -- 3)
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);

    node1.neighbors.push(node2, node4);
    node2.neighbors.push(node1, node3);
    node3.neighbors.push(node2, node4);
    node4.neighbors.push(node1, node3);

    // クローン作成
    const clonedNode1 = cloneGraph(node1);

    // 検証
    expect(clonedNode1?.val).toBe(1);
    expect(clonedNode1?.neighbors.length).toBe(2);

    // 隣接ノードの値を確認
    const neighborValues = clonedNode1?.neighbors.map((n) => n.val).sort();
    expect(neighborValues).toEqual([2, 4]);

    // 2番目のノードとその隣接ノードを確認
    const clonedNode2 = clonedNode1?.neighbors.find((n) => n.val === 2);
    expect(clonedNode2?.neighbors.length).toBe(2);
    const node2NeighborValues = clonedNode2?.neighbors.map((n) => n.val).sort();
    expect(node2NeighborValues).toEqual([1, 3]);

    // 3番目のノードとその隣接ノードを確認
    const clonedNode3 = clonedNode2?.neighbors.find((n) => n.val === 3);
    expect(clonedNode3?.neighbors.length).toBe(2);
    const node3NeighborValues = clonedNode3?.neighbors.map((n) => n.val).sort();
    expect(node3NeighborValues).toEqual([2, 4]);

    // 4番目のノードとその隣接ノードを確認
    const clonedNode4 = clonedNode1?.neighbors.find((n) => n.val === 4);
    expect(clonedNode4?.neighbors.length).toBe(2);
    const node4NeighborValues = clonedNode4?.neighbors.map((n) => n.val).sort();
    expect(node4NeighborValues).toEqual([1, 3]);

    // 同一性の確認（クローンされたノードが新しいオブジェクトであること）
    expect(clonedNode1).not.toBe(node1);
    expect(clonedNode2).not.toBe(node2);
    expect(clonedNode3).not.toBe(node3);
    expect(clonedNode4).not.toBe(node4);
  });
});
