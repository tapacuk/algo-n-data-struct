import { permutationWithRepetition } from '../combinatorics';

export function solveLevelTwo(): void {
  const n = 8;
  const counts = [3, 1, 1, 3];

  const result = permutationWithRepetition(n, counts);

  console.log('=== Завдання 2 ===');
  console.log('Тип вибiрки: Перестановки з повтореннями P(n; n1,n2,...)');
  console.log('Непарнi цифри вiсiмкової системи: 1, 3, 5, 7');
  console.log(
    `Набiр:   \n1 (${counts[0]}шт)   \n3 (${counts[1]}шт)    \n5 (${counts[2]}шт)    \n7 (${counts[3]}шт) \n 8 значне число у результаті`,
  );
  console.log(`P(8; 3,1,1,3) = 8! / (3!*1!*1!*3!) = ${result}`);
  console.log(`Вiдповiдь: кiлькiсть восьмизначних чисел = ${result}`);
}
