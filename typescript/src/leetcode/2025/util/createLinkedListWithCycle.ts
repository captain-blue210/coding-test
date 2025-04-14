import { ListNode } from "./ListNode";

export function createLinkedListWithCycle(
  values: number[],
  pos: number
): ListNode | null {
  if (values.length === 0) {
    return null;
  }

  // 最初のノードを作成
  const head = new ListNode(values[0]);
  let current = head;

  // 全ノードの参照を保持する配列
  const nodes: ListNode[] = [head];

  // 残りのノードを作成
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
    nodes.push(current);
  }

  // サイクルを作成（posが-1ならサイクルなし）
  if (pos !== -1 && pos < nodes.length) {
    current.next = nodes[pos]; // 最後のノードを指定位置のノードにリンク
  }

  return head;
}
