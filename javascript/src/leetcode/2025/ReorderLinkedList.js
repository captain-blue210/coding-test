/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @return {void}
   */
  reorderList(head) {
    // find mid
    let slow = head;
    let fast = head.next;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let second = slow.next;
    let prev = (slow.next = null);
    while (second !== null) {
      const next = second.next;
      second.next = prev;
      prev = second;
      second = next;
    }

    let first = head;
    second = prev;
    while (second) {
      let tmp1 = first.next;
      let tmp2 = second.next;
      first.next = second;
      second.next = tmp1;
      first = tmp1;
      second = tmp2;
    }
  }
}
