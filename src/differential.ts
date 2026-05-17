function f(x: number, y: number): number {
  const tgX = Math.tan(x);
  if (Math.abs(tgX) < 1e-12) return 0;

  return (1 + y) / tgX;
}

export function rungeKuttaStep(x: number, y: number, h: number): number {
  const k1 = h * f(x, y);
  const k2 = h * f(x + h / 2, y + k1 / 2);
  const k3 = h * f(x + h / 2, y + k2 / 2);
  const k4 = h * f(x + h, y + k3);

  return y + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
}
