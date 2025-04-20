export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  if (n === 0) return;

  // num1の最後の0以外の最後の要素を表すindex
  let i = m - 1;
  // num2の最後の要素を表すindex
  let j = n - 1;
  // 配列全体の最後のindex
  let k = m + n - 1;

  while (j >= 0) {
    // nums1に有効な数字がない場合は、比較したときに絶対に小さくなる値を入れておく
    const num1Elm = i >= 0 ? nums1[i] : Number.NEGATIVE_INFINITY;
    const num2Elm = nums2[j];
    console.log(num1Elm);
    console.log(num2Elm);

    nums1[k] = Math.max(num1Elm, num2Elm);
    console.log(nums1);

    // num1に追加した側のindexを減らす
    if (num1Elm > num2Elm) {
      i--;
    } else {
      j--;
    }
    k--;
  }
}
