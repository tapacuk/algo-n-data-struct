import { permutationWithRepetition } from '../combinatorics';

export function solveLevelTwo(): void {
  // Odd digits of octal system: 1, 3, 5, 7
  // Largest (7) and smallest (1) appear 3 times, rest (3, 5) appear 1 time each
  // Total: 3+1+1+3 = 8 digits
  const n = 8;
  const counts = [3, 1, 1, 3]; // digit 1: x3, digit 3: x1, digit 5: x1, digit 7: x3

  const result = permutationWithRepetition(n, counts);

  console.log('=== Завдання 2 ===');
  console.log('Тип вибiрки: Перестановки з повтореннями P(n; n1,n2,...)');
  console.log('Непарнi цифри вiсiмкової системи: 1, 3, 5, 7');
  console.log('Набiр: 1(x3), 3(x1), 5(x1), 7(x3) -> всього 8 цифр');
  console.log(`P(8; 3,1,1,3) = 8! / (3!*1!*1!*3!) = ${result}`);
  console.log(`Вiдповiдь: кiлькiсть восьмизначних чисел = ${result}`);
}
