import { findDifference } from "./FindtheDifferenceOfTwoArrays";

describe("findDifference", () => {
  it("正常なケース：nums1とnums2に共通する要素と固有の要素がある場合", () => {
    const nums1 = [1, 2, 3];
    const nums2 = [2, 4, 6];

    const result = findDifference(nums1, nums2);

    // 結果が2つの配列を含む配列であること
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(2);
    expect(result[0]).toBeInstanceOf(Array);
    expect(result[1]).toBeInstanceOf(Array);

    // answer[0]はnums1にあってnums2にない要素を含む
    expect(result[0]).toEqual(expect.arrayContaining([1, 3]));
    expect(result[0].length).toBe(2);

    // answer[1]はnums2にあってnums1にない要素を含む
    expect(result[1]).toEqual(expect.arrayContaining([4, 6]));
    expect(result[1].length).toBe(2);
  });

  it("重複する要素を含む場合、結果には重複が含まれない", () => {
    const nums1 = [1, 2, 3, 3];
    const nums2 = [1, 1, 2, 2];

    const result = findDifference(nums1, nums2);

    // nums1で3は重複しているが、結果には一度だけ含まれる
    expect(result[0]).toEqual([3]);

    // nums2のすべての要素はnums1にも存在するため、result[1]は空配列
    expect(result[1]).toEqual([]);
  });

  it("空の配列が入力された場合", () => {
    const nums1: number[] = [];
    const nums2 = [1, 2, 3];

    const result = findDifference(nums1, nums2);

    // nums1が空なので、result[0]は空配列
    expect(result[0]).toEqual([]);

    // nums2のすべての要素はnums1にないので、result[1]はnums2のすべての要素を含む
    expect(result[1]).toEqual(expect.arrayContaining([1, 2, 3]));
    expect(result[1].length).toBe(3);
  });

  it("両方の配列が空の場合", () => {
    const nums1: number[] = [];
    const nums2: number[] = [];

    const result = findDifference(nums1, nums2);

    // 両方の配列が空なので、結果は空配列を2つ含む
    expect(result[0]).toEqual([]);
    expect(result[1]).toEqual([]);
  });

  it("両方の配列に同じ要素しかない場合", () => {
    const nums1 = [1, 2, 3];
    const nums2 = [1, 2, 3];

    const result = findDifference(nums1, nums2);

    // 両方の配列が同じ要素を含むので、結果は空配列を2つ含む
    expect(result[0]).toEqual([]);
    expect(result[1]).toEqual([]);
  });

  it("負の数を含む場合", () => {
    const nums1 = [-1, -2, 0, 1];
    const nums2 = [0, 1, 2, 3];

    const result = findDifference(nums1, nums2);

    // nums1から負の数が正しく抽出される
    expect(result[0]).toEqual(expect.arrayContaining([-1, -2]));
    expect(result[0].length).toBe(2);

    // nums2から正の数が正しく抽出される
    expect(result[1]).toEqual(expect.arrayContaining([2, 3]));
    expect(result[1].length).toBe(2);
  });

  it("結果の順序は問わないが、すべての要素が含まれていること", () => {
    const nums1 = [4, 5, 6, 7];
    const nums2 = [1, 2, 3, 5, 6];

    const result = findDifference(nums1, nums2);

    // 順序は問わないため、toEqualではなくtoIncludeSameMembers（あるいはsorted比較）
    // ここではexpect.arrayContainingを使用して、配列に特定の要素が含まれていることを確認
    expect(result[0]).toEqual(expect.arrayContaining([4, 7]));
    expect(result[0].length).toBe(2);

    expect(result[1]).toEqual(expect.arrayContaining([1, 2, 3]));
    expect(result[1].length).toBe(3);
  });

  it("大きな数値を含む場合", () => {
    const nums1 = [1000000, 2000000];
    const nums2 = [2000000, 3000000];

    const result = findDifference(nums1, nums2);

    expect(result[0]).toEqual([1000000]);
    expect(result[1]).toEqual([3000000]);
  });
});
