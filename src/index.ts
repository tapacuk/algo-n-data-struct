import { solveDifferential } from './differential';
import { LUP } from './lup';
import { printMatrix, printVector } from './utils';

function main() {
  console.log('--- Завдання 1: LUP-розкладання СЛАР ---');
  console.log('Вирішується система згідно з варіантом на картинці:\n');

  const equations = [
    '0x + 4y + 8z + 4w = 6',
    '0x - 4y + 6z + 5w = -12',
    '-5x - 7y - 7z - 6w = -64',
    '5x + 7y + 3z + 4w = 72',
  ];

  console.log('Початкова система рівнянь:');
  equations.forEach((eq) => console.log(`  ${eq}`));

  try {
    const solver = new LUP(equations);
    solver.decompose();

    const L = solver.getLowerTriangle();
    const U = solver.getMatrix();
    const X = solver.calculateSolution();

    console.log('\nРезультати розкладання:');
    printMatrix('L (Одинична нижня-трикутна)', L);
    printMatrix('U (Верхня-трикутна)', U);

    console.log("\nРозв'язок системи (вектор X):");
    printVector('X', X);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log('Помилка під час вирішення: ' + e.message);
    } else {
      console.log('Невідома помилка');
    }
  }

  console.log('\n--- Завдання 2: Метод Рунге-Кутта 4-го порядку ---');
  console.log(
    "Розв'язуємо тестове диференційне рівняння 2-го порядку: y'' = -y",
  );

  const f = (t: number, y: number, dy: number) => {
    return -y;
  };

  const results = solveDifferential(f, 0, 1, 0, 0.1, 10);

  console.log('\nТаблиця результатів:');
  console.log('Крок |     Час (t) |   Функція (y) | Похідна (dy)');
  console.log('-------------------------------------------------');
  for (let i = 0; i < results.length; i++) {
    const res = results[i];
    if (res !== undefined) {
      const stepStr = i.toString().padStart(4, ' ');
      const tStr = res.t.toFixed(4).padStart(11, ' ');
      const yStr = res.y.toFixed(4).padStart(13, ' ');
      const dyStr = res.dy.toFixed(4).padStart(12, ' ');
      console.log(`${stepStr} | ${tStr} | ${yStr} | ${dyStr}`);
    }
  }
}

main();
