import { ask, runDifferentialEquation, runRootFinding } from './helpers';
import { rectangleMethod, simpsonMethod, trapezoidMethod } from './integration';

async function main(): Promise<void> {
  // Завдання 1
  console.log('     Завдання 1 (інтеграл) ');
  const a1 = 3;
  const b1 = 8;
  const h1 = 1.0;
  console.log('');

  console.log('--- Завдання 1: Обчислення визначеного інтеграла');
  console.log('Функція: sqrt(x^2 + 9) / e^(0.1x)');
  console.log('Інтервал: [' + a1 + ', ' + b1 + '], крок h = ' + h1);
  console.log('');
  console.log('Метод трапецій:      ' + trapezoidMethod(a1, b1, h1).toFixed(6));
  console.log('Метод прямокутників: ' + rectangleMethod(a1, b1, h1).toFixed(6));
  console.log('Метод Сімпсона:      ' + simpsonMethod(a1, b1, h1).toFixed(6));
  await ask('');

  // завдання 2
  console.clear();
  console.log('[!] Введіть параметри для Завдання 2 (корені рівняння)');
  const a2 = parseFloat(await ask('Початок інтервалу a: '));
  const b2 = parseFloat(await ask('Кінець інтервалу b: '));
  console.log('');

  runRootFinding(a2, b2);
  await ask('');

  // завдання 3
  console.clear();
  console.log(
    '--- Введіть параметри для Завдання 3 (диференціальне рівняння) ---',
  );
  const x0 = parseFloat(await ask('Початкове значення x0: '));
  const y0 = parseFloat(await ask('Початкове значення y0: '));
  const xEnd = parseFloat(await ask('Кінцеве значення x: '));
  const h3 = parseFloat(await ask('Крок h: '));
  console.log('');

  runDifferentialEquation(x0, y0, xEnd, h3);
}

main();
