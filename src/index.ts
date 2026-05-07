import { generateStudents, sortStudents, binarySearch } from './array-search';
import { RandomizedBST } from './randomized-bst';
import { RootBST } from './root-bst';
import { Student } from './student';

console.log('РІВЕНЬ 1: Робота з одновимірним масивом ');
const studentsArray = generateStudents();

console.log('Початковий невідсортований масив:');
studentsArray.forEach((s) => console.log(s.toString()));

console.log('\nСортування масиву для бінарного пошуку...');
sortStudents(studentsArray);

console.log('Відсортований масив:');
studentsArray.forEach((s) => console.log(s.toString()));

console.log(
  '\nЗавдання: Визначити, на якому факультеті і курсі навчається студент, що пропустив 100 годин занять...',
);
const foundStudent = binarySearch(studentsArray, 100);
if (foundStudent !== null) {
  console.log(
    `РЕЗУЛЬТАТ: Знайдено студента! Факультет: ${foundStudent.faculty}, Курс: ${foundStudent.course}`,
  );
} else {
  console.log('РЕЗУЛЬТАТ: Студента зі 100 пропусками не знайдено.');
}

const testStudents = [
  new Student('Коваленко', 1, 'ФІТ', 10),
  new Student('Бойко', 2, 'Економіка', 5),
  new Student('Ткаченко', 1, 'Право', 12),
  new Student('Іваненко', 4, 'ФІТ', 0),
  new Student('Григоренко', 3, 'Історія', 22),
];

console.log('\nРІВЕНЬ 2: Робота з BST-деревом (вставка в корінь) ');
const bst = new RootBST();

console.log('Додавання вузлів та виведення дерева (обхід в ширину):');
for (const student of testStudents) {
  bst.add(student);
  console.log(`Додано: ${student.lastName}`);
  bst.printBFS();
}

console.log("\nПошук вузла за ключем 'Бойко'...");
const foundNode1 = bst.search('Бойко');
if (foundNode1 !== null) {
  console.log(`РЕЗУЛЬТАТ: Знайдено вузол - ${foundNode1.toString()}`);
} else {
  console.log('РЕЗУЛЬТАТ: Вузол не знайдено.');
}

console.log(
  '\n=== РІВЕНЬ 3: Робота зі збалансованим BST-деревом (Рандомізація) ===',
);
const randomizedBst = new RandomizedBST();

console.log(
  'Додавання вузлів та виведення збалансованого дерева (обхід в ширину):',
);
for (const student of testStudents) {
  randomizedBst.add(student);
  console.log(`Додано: ${student.lastName}`);
  randomizedBst.printBFS();
}

console.log("\nПошук вузла за ключем 'Іваненко'...");
const foundNode2 = randomizedBst.search('Іваненко');
if (foundNode2 !== null) {
  console.log(`РЕЗУЛЬТАТ: Знайдено вузол - ${foundNode2.toString()}`);
} else {
  console.log('РЕЗУЛЬТАТ: Вузол не знайдено.');
}
