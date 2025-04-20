import { merge } from "./MergeSortedArray";

describe("Merge Sorted Array", () => {
  test("LeetCodeの例題1: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  test("LeetCodeの例題2: nums1 = [1], m = 1, nums2 = [], n = 0", () => {
    const nums1 = [1];
    const nums2: number[] = [];
    merge(nums1, 1, nums2, 0);
    expect(nums1).toEqual([1]);
  });

  test("LeetCodeの例題3: nums1 = [0], m = 0, nums2 = [1], n = 1", () => {
    const nums1 = [0];
    const nums2 = [1];
    merge(nums1, 0, nums2, 1);
    expect(nums1).toEqual([1]);
  });

  test("両方の配列に同じ値がある場合", () => {
    const nums1 = [1, 3, 5, 0, 0, 0];
    const nums2 = [2, 3, 4];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 3, 3, 4, 5]);
  });

  test("nums1の要素がすべてnums2の要素より大きい場合", () => {
    const nums1 = [4, 5, 6, 0, 0, 0];
    const nums2 = [1, 2, 3];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("nums1の要素がすべてnums2の要素より小さい場合", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [4, 5, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("nums2が空の場合", () => {
    const nums1 = [1, 2, 3];
    const nums2: number[] = [];
    merge(nums1, 3, nums2, 0);
    expect(nums1).toEqual([1, 2, 3]);
  });

  test("nums1が空の場合（m=0）", () => {
    const nums1 = [0, 0, 0];
    const nums2 = [1, 2, 3];
    merge(nums1, 0, nums2, 3);
    expect(nums1).toEqual([1, 2, 3]);
  });

  test("大きな配列の場合", () => {
    const nums1 = [1, 3, 5, 7, 9, 0, 0, 0, 0, 0];
    const nums2 = [2, 4, 6, 8, 10];
    merge(nums1, 5, nums2, 5);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
