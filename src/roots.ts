function f(x: number): number {
  return 2 * x - 3 * Math.sin(2 * x) - 1;
}

export function fDerivative(x: number): number {
  return 2 - 6 * Math.cos(2 * x);
}

const EPS = 1e-6;
const MAX_ITER = 10000;

export function bisectionMethod(a: number, b: number): number | null {
  if (f(a) * f(b) > 0) return null;

  let lo = a;
  let hi = b;

  for (let i = 0; i < MAX_ITER; i++) {
    const mid = (lo + hi) / 2;

    if (Math.abs(hi - lo) < EPS) return mid;

    if (f(lo) * f(mid) <= 0) {
      hi = mid;
    } else {
      lo = mid;
    }
  }

  return (lo + hi) / 2;
}

export function newtonMethod(a: number, b: number): number | null {
  if (f(a) * f(b) > 0) return null;

  let x = (a + b) / 2;

  for (let i = 0; i < MAX_ITER; i++) {
    const df = fDerivative(x);
    if (Math.abs(df) < 1e-12) break;

    const xNext = x - f(x) / df; // step
    if (Math.abs(xNext - x) < EPS) return xNext;

    x = xNext;
  }

  return x;
}

export function chordMethod(a: number, b: number): number | null {
  if (f(a) * f(b) > 0) return null;

  let x0 = a;
  let x1 = b;

  for (let i = 0; i < MAX_ITER; i++) {
    const fa = f(x0);
    const fb = f(x1);

    if (Math.abs(fb - fa) < 1e-12) break;
    const x2 = x1 - (fb * (x1 - x0)) / (fb - fa);

    if (Math.abs(x2 - x1) < EPS) return x2;

    x0 = x1;
    x1 = x2;
  }

  return x1;
}

export function findRootsOnInterval(
  a: number,
  b: number,
  h: number,
): number[][] {
  const intervals: number[][] = [];
  let x = a;

  while (x + h <= b) {
    if (f(x) * f(x + h) <= 0) {
      intervals.push([x, x + h]);
    }

    x += h;
  }

  return intervals;
}
