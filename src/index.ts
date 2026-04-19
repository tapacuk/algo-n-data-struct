import { BinaryTree } from './binary-tree';
import { printTable } from './helpers';
import { Student } from './student';

const students: Student[] = [
  new Student('Іваненко', 'Олег', 2, 500, new Date(2004, 0, 15)),
  new Student('Петренко', 'Анна', 3, 300, new Date(2003, 5, 20)),
  new Student('Коваленко', 'Марія', 2, 700, new Date(2004, 1, 10)),
  new Student('Шевченко', 'Дмитро', 1, 100, new Date(2005, 2, 5)),
  new Student('Бондаренко', 'Ірина', 2, 400, new Date(2004, 0, 20)),
  new Student('Кравченко', 'Тетяна', 2, 600, new Date(2004, 11, 25)),
  new Student('Мороз', 'Павло', 4, 800, new Date(2002, 7, 18)),
  new Student('Ткаченко', 'Сергій', 3, 450, new Date(2003, 4, 10)),
  new Student('Лисенко', 'Наталія', 2, 900, new Date(2004, 1, 28)),
];

console.log('РІВЕНЬ 1 | побудова та паралельний обхід');

const tree1 = new BinaryTree();
for (const s of students) {
  tree1.insert(s);
}

console.log('Дерево (паралельний обхід)');
printTable(tree1.levelOrder());

console.log('\nРІВЕНЬ 2 | пошук за критерієм');

const tree2 = new BinaryTree();
for (const s of students) {
  tree2.insert(s);
}

console.log('Дерево (паралельний обхід)');
printTable(tree2.levelOrder());

console.log('\nКритерій пошуку: студенти 2-го курсу, що народилися взимку');
const studFound = tree2.search();

if (studFound.length === 0) {
  console.log('Результат пошуку: нічого не знайдено');
} else {
  printTable(studFound);
}

console.log('\nРІВЕНЬ 3 | видалення вузлів за критерієм');

const tree3 = new BinaryTree();
for (const s of students) tree3.insert(s);

printTable(tree3.levelOrder());

console.log('\nВидалення студентів 2-го курсу, що народилися взимку');
tree3.deleteMatching();

printTable(tree3.levelOrder());
