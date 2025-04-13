import {
  ListNode,
  mergeTwoLists,
} from "../src/leetcode/2025/MergeSrotedLinkedLists";

describe("mergeTwoLists", () => {
  it("should return [1,1,2,3,4,4]", () => {
    const list1: ListNode = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2: ListNode = new ListNode(1, new ListNode(3, new ListNode(4)));
    // [1,1,2,3,4,4]
    const expected: ListNode = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
      )
    );
    console.log(list1);
    console.log(list2);

    expect(mergeTwoLists(list1, list2)).toEqual(expected);
  });
});
