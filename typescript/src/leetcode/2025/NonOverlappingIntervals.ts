export function eraseOverlapIntervals(intervals: number[][]): number {
  // 終了時間が早いものを昇順ソートで並び替え
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let prevEnd = intervals[0][1];

  for (let index = 1; index < intervals.length; index++) {
    const [start, end] = intervals[index];

    if (start < prevEnd) {
      count++;
    } else {
      prevEnd = end;
    }
  }

  return count;
}
