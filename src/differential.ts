export function solveDifferential(
  f: (t: number, y: number, dy: number) => number,
  t0: number,
  y0: number,
  dy0: number,
  h: number,
  steps: number,
) {
  const results = [];
  let t = t0;
  let y = y0;
  let dy = dy0;

  results.push({ t, y, dy });

  for (let i = 0; i < steps; i++) {
    const k1_y = dy;
    const k1_dy = f(t, y, dy);

    const k2_y = dy + 0.5 * h * k1_dy;
    const k2_dy = f(t + 0.5 * h, y + 0.5 * h * k1_y, dy + 0.5 * h * k1_dy);

    const k3_y = dy + 0.5 * h * k2_dy;
    const k3_dy = f(t + 0.5 * h, y + 0.5 * h * k2_y, dy + 0.5 * h * k2_dy);

    const k4_y = dy + h * k3_dy;
    const k4_dy = f(t + h, y + h * k3_y, dy + h * k3_dy);

    y = y + (h / 6) * (k1_y + 2 * k2_y + 2 * k3_y + k4_y);
    dy = dy + (h / 6) * (k1_dy + 2 * k2_dy + 2 * k3_dy + k4_dy);
    t = t + h;

    results.push({ t, y, dy });
  }

  return results;
}
