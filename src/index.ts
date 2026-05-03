import { DoublyLinkedList } from './double-linked-list';
import { insertionSortArray, insertionSortList } from './insertion-sort';
import { pocketSortList } from './pocket-sort';
import { Student } from './student';

const initialStudents: Student[] = [
  new Student('Іваненко', 100, 30), // 0.30
  new Student('Петренко', 80, 10), // 0.125
  new Student('Сидоренко', 90, 45), // 0.50
  new Student('Коваленко', 70, 7), // 0.10
  new Student('Мороз', 60, 24), // 0.40
  new Student('Бондаренко', 110, 55), // 0.50
  new Student('Ткаченко', 85, 0), // 0.00
  new Student('Левченко', 95, 38), // 0.40
];

console.log('\nРІВЕНЬ 1: Одновимірний масив, сортування вставкою');

console.log('\n--- Масив ДО сортування ---');
for (const student of initialStudents) {
  console.log(student.toString());
}

const sortedArray: Student[] = insertionSortArray(initialStudents);

console.log(
  '\n--- Масив ПІСЛЯ сортування вставкою (за зростанням співвідношення) ---',
);
for (const student of sortedArray) {
  console.log(student.toString());
}

console.log('\nРІВЕНЬ 2: Двоспрямований список, сортування вставкою');

const list = new DoublyLinkedList();
for (const student of initialStudents) {
  list.append(student);
}

console.log('\n--- Список ДО сортування ---');
list.print();
`~`;
const sortedList = insertionSortList(list);

console.log(
  '\n--- Список ПІСЛЯ сортування вставкою (за зростанням співвідношення) ---',
);
sortedList.print();

console.log('\nРІВЕНЬ 3: Двоспрямований список, кишеньковий сорт');

const list3 = new DoublyLinkedList();
for (const student of initialStudents) {
  list3.append(student);
}

console.log('\n--- Список ДО сортування ---');
list3.print();

const sortedList3 = pocketSortList(list3);

console.log(
  '\n--- Список ПІСЛЯ кишенькового сортування (за зростанням співвідношення) ---',
);
sortedList3.print();
