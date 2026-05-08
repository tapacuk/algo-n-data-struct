export function measureMs(fn: () => void, runs: number = 5): number {
  let total: number = 0;

  for (let i = 0; i < runs; i++) {
    const start: number = performance.now();
    fn();
    const end: number = performance.now();
    total = total + (end - start);
  }

  return total / runs;
}
