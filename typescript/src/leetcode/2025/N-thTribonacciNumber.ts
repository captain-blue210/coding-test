export function tribonacci(n: number): number {
  if (n < 3) return n === 0 ? 0 : 1;

  let t0 = 0;
  let t1 = 1;
  let t2 = 1;

  for (let index = 3; index <= n; index++) {
    const result = t0 + t1 + t2;
    t0 = t1;
    t1 = t2;
    t2 = result;
  }
  return t2;
}
