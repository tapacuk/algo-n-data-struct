function f(x: number): number {
  return Math.sqrt(x * x + 9) / Math.exp(0.1 * x);
}

export function trapezoidMethod(a: number, b: number, h: number): number {
  const n = Math.round((b - a) / h);
  let sum = (f(a) + f(b)) / 2;

  for (let i = 1; i < n; i++) {
    sum += f(a + i * h);
  }

  return sum * h;
}

export function rectangleMethod(a: number, b: number, h: number): number {
  const n = Math.round((b - a) / h);
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += f(a + (i + 0.5) * h);
  }

  return sum * h;
}

export function simpsonMethod(a: number, b: number, h: number): number {
  let n = Math.round((b - a) / h);

  if (n % 2 !== 0) n += 1;

  const step = (b - a) / n;
  let sum = f(a) + f(b);

  for (let i = 1; i < n; i++) {
    sum += (i % 2 === 0 ? 2 : 4) * f(a + i * step);
  }

  return (sum * step) / 3;
}
