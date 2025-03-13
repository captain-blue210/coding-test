import {
   ListNode,
   reverseList,
} from "../src/leetcode/2025/ReverseLinkedList";

describe("Reverse Linked List", () => {
  test("Empty input returns null", () => {
    const empty: ListNode = new ListNode();
    expect(reverseList(empty)).toBeNull();
  });

  test("Given [1 -> 2] array", () => {
    const given: ListNode = new ListNode(1, new ListNode(2, null));
    expect(reverseList(given)).toEqual(new ListNode(2, new ListNode(1, null)));
  });

  test("Given [1,2,3,4,5] array", () => {
    const given: ListNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    expect(reverseList(given)).toEqual(
      new ListNode(
        5,
        new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
      )
    );
  });
});
