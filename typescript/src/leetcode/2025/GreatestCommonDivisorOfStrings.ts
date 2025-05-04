export function gcdOfStrings(str1: string, str2: string): string {
  let gcd = getGcd(str1.length, str2.length);

  const candidate = str1.slice(0, gcd);

  if (isMadeFrom(str1, candidate) && isMadeFrom(str2, candidate)) {
    return candidate;
  }
  return "";
}

function getGcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function isMadeFrom(str: string, pattern: string): boolean {
  if (pattern === "") return false;

  const temp = pattern.repeat(str.length / pattern.length);
  return str === temp;
}
