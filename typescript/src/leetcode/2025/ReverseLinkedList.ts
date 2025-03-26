import { ListNode } from "./util/ListNode";

export function reverseList(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) {
    return null;
  }

  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current != null) {
    let next: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
