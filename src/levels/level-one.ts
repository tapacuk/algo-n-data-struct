import { arrangement } from '../combinatorics';

export function solveLevelOne(n: number, k: number) {
  const result = arrangement(n, k);

  console.log('=== Завдання 1 ===');
  console.log('Тип вибiрки: Розмiщення без повторень A(n, k)');
  console.log(`Кiлькiсть студентiв: ${n}, кiлькiсть посад: ${k}`);
  console.log(`A(${n}, ${k}) = ${n}*${n - 1}*${n - 2} = ${result}`);
  console.log(
    `Вiдповiдь: кiлькiсть варiантiв органу самоврядування = ${result}`,
  );
}
