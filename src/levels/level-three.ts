import * as fs from 'fs';

function generateArrangements(n: number, k: number): number[][] {
  const result: number[][] = [];
  const elements: number[] = Array.from({ length: n }, (_, i) => i + 1);
  const used: boolean[] = new Array(n).fill(false);
  const current: number[] = [];

  function backtrack(): void {
    if (current.length === k) {
      result.push([...current]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!used[i]) {
        used[i] = true;
        current.push(elements[i]!);
        backtrack();
        current.pop();
        used[i] = false;
      }
    }
  }

  backtrack();
  return result;
}

export function solveLevelThree(n: number, k: number): void {
  console.log('=== Завдання 3 ===');
  console.log(`Генерацiя усiх розмiщень A(${n}, ${k})...`);

  const arrangements = generateArrangements(n, k);
  const lines = arrangements.map((arr, i) => `${i + 1}: (${arr.join(', ')})`);
  const content =
    `Розмiщення A(${n}, ${k}) - всього ${arrangements.length}\n\n` +
    lines.join('\n');

  fs.writeFileSync('arrangements.txt', content, 'utf-8');
  console.log(
    `Записано ${arrangements.length} розмiщень у файл arrangements.txt`,
  );
}
