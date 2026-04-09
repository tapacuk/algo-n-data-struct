import { IntList, StringDoubleLinkedList } from './data-structures';
import { printStructure, randInt } from './helpers';

function main() {
  // 1 завдання
  const intArr = new IntList(10);
  for (let i = 0; i < 10; i++) {
    intArr.insert(randInt(-100, 100));
  }

  console.log('Завдання 1: Список цілих чисел');
  printStructure(intArr.data);

  const numToDelete = intArr.data[4];
  intArr.delete(numToDelete);
  console.log('Число яке видаляємо =>', numToDelete);
  printStructure(intArr.data);

  // 2 завдання

  console.log(
    '\nЗавдання 2: рядковий двоспрямований список (цілі додатні числа)',
  );

  const stringDeque = new StringDoubleLinkedList(10);
  for (let i = 0; i < 5; i++) {
    stringDeque.insertBack(String(randInt(1, 100)));
    stringDeque.insertFront(String(randInt(-100, -1)));
  }

  printStructure(stringDeque.data);

  // 3 завдання

  console.log(
    '\nЗавдання 3: Список цілих чисел та рядковий двоспрямований список (цілі додатні числа)',
  );
  const intArrNew = intArr.copy();
  const stringDequeNew = stringDeque.copy(30);

  console.log('До операцій: ');
  console.log('   Список');
  printStructure(intArrNew.data);
  console.log('   Двоспрямований список');
  printStructure(stringDequeNew.data);

  for (const value of intArrNew.data) {
    if (value > 0 && value % 2 === 0) {
      stringDequeNew.insertBack(String(value));
      intArrNew.delete(value);
    }
  }

  console.log('\nПісля видалення та вставки: ');
  console.log('   Список');
  printStructure(intArrNew.data);
  console.log('   Двоспрямований список');
  printStructure(stringDequeNew.data);

  console.log('Після сортування: ');
  stringDequeNew.sort(true);
  printStructure(stringDequeNew.data);
}

main();
