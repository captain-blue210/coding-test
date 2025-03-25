/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 == null && list2 == null) return null;

  const dummyHead = new ListNode(-1);
  let result = dummyHead;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      result.next = list1;
      // 追加したlist1のほうのnextを更新する
      list1 = list1.next;
    } else {
      result.next = list2;
      list2 = list2.next;
    }
    result = result.next;
  }

  if (list1 != null) {
    result.next = list1;
  } else {
    result.next = list2;
  }
  return dummyHead.next;
}
