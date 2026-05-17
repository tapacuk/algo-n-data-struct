import readline from 'readline';
import {
  bisectionMethod,
  newtonMethod,
  chordMethod,
  findRootsOnInterval,
} from './roots';
import { rungeKuttaStep } from './differential';

export async function ask(message: string): Promise<string> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

export function runRootFinding(a: number, b: number): void {
  console.log('=== Завдання 2: Знаходження коренів рівняння ===');
  console.log('Функція: y(x) = 2x - 3sin(2x) - 1');
  console.log('Інтервал: [' + a + ', ' + b + ']');
  console.log('');

  const scanStep = 0.1;
  const subIntervals = findRootsOnInterval(a, b, scanStep);

  if (subIntervals.length === 0) {
    console.log('На інтервалі [' + a + ', ' + b + '] коренів не знайдено.');
    console.log('');
    return;
  }

  console.log('Знайдено коренів: ' + subIntervals.length);
  console.log('');

  for (let i = 0; i < subIntervals.length; i++) {
    const sub = subIntervals[i]!;
    const la = sub[0]!;
    const lb = sub[1]!;
    console.log('Корені [' + la.toFixed(3) + ', ' + lb.toFixed(3) + ']:');

    const rBisect = bisectionMethod(la, lb);
    const rNewton = newtonMethod(la, lb);
    const rChord = chordMethod(la, lb);

    console.log(
      '  Метод бісекції: ' +
        (rBisect !== null ? rBisect.toFixed(8) : 'не знайдено'),
    );
    console.log(
      '  Метод дотичних: ' +
        (rNewton !== null ? rNewton.toFixed(8) : 'не знайдено'),
    );
    console.log(
      '  Метод хорд:     ' +
        (rChord !== null ? rChord.toFixed(8) : 'не знайдено'),
    );
    console.log('');
  }
}

export function runDifferentialEquation(
  x0: number,
  y0: number,
  xEnd: number,
  h: number,
): void {
  console.log("=== Завдання 3: Розв'язання диференціального рівняння ===");
  console.log('Рівняння: dy/dx = (1 + y) / tg(x)');
  console.log('Метод: Рунге-Кутта 4-го порядку');
  console.log('Початкові умови: x0 = ' + x0 + ', y0 = ' + y0);
  console.log('Кінцеве значення: xEnd = ' + xEnd + ', крок h = ' + h);
  console.log('');
  console.log('x\t\t\ty');
  console.log('------------------------------------------------');

  let x = x0;
  let y = y0;

  console.log(x.toFixed(4) + '\t\t\t' + y.toFixed(6));

  while (x + h <= xEnd + 1e-10) {
    y = rungeKuttaStep(x, y, h);
    x = parseFloat((x + h).toFixed(10));
    console.log(x.toFixed(4) + '\t\t\t' + y.toFixed(6));
  }

  console.log('');
}
