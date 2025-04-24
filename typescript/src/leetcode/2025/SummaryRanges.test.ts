import { summaryRanges } from "./SummaryRanges";

describe("Summary Ranges", () => {
  it("[0, 1, 2, 4, 5, 7] should be ['0->2', '4->5', '7']", () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(["0->2", "4->5", "7"]);
  });

  it("空の配列の場合は空の配列を返す", () => {
    expect(summaryRanges([])).toEqual([]);
  });

  it("1つの要素だけを持つ配列の場合はその要素を文字列として返す", () => {
    expect(summaryRanges([5])).toEqual(["5"]);
  });

  it("すべての要素が連続していない配列の場合は各要素を個別に返す", () => {
    expect(summaryRanges([1, 3, 5, 7])).toEqual(["1", "3", "5", "7"]);
  });

  it("すべての要素が連続している配列の場合は1つの範囲として返す", () => {
    expect(summaryRanges([1, 2, 3, 4, 5])).toEqual(["1->5"]);
  });

  it("負の数を含む配列の場合も正しく処理する", () => {
    expect(summaryRanges([-3, -2, -1, 1, 2, 4])).toEqual([
      "-3->-1",
      "1->2",
      "4",
    ]);
  });

  it("大きな数値を含む配列の場合も正しく処理する", () => {
    expect(summaryRanges([100, 101, 103, 104, 105, 110])).toEqual([
      "100->101",
      "103->105",
      "110",
    ]);
  });

  it("最大長の配列（20要素）も正しく処理する", () => {
    const input = [
      -10, -9, -8, -6, -5, -4, -1, 0, 1, 3, 5, 7, 8, 9, 10, 11, 13, 15, 17, 20,
    ];
    const expected = [
      "-10->-8",
      "-6->-4",
      "-1->1",
      "3",
      "5",
      "7->11",
      "13",
      "15",
      "17",
      "20",
    ];
    expect(summaryRanges(input)).toEqual(expected);
  });
});
