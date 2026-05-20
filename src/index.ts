import { ask } from './helpers';
import { solveLevelOne, solveLevelThree, solveLevelTwo } from './levels';

async function main(): Promise<void> {
  console.log('=== Дослiдження комбiнаторних алгоритмiв ===\n');

  const nStr = await ask('Введiть кiлькiсть студентiв у групi (n): ');
  const kStr = await ask('Введiть кiлькiсть посад (k): ');

  const n = parseInt(nStr, 10);
  const k = parseInt(kStr, 10);

  if (isNaN(n) || isNaN(k) || n < k || k < 1) {
    console.log('Невiрнi вхiднi данi.');
    return;
  }

  console.log();
  solveLevelOne(n, k);
  console.log();
  solveLevelTwo();
  console.log();
  solveLevelThree(n, k);
}

main();
