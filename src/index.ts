import { Triangle } from './triangle';
import { HashTable } from './hashtable';
import { randomTriangle } from './randomTriangle';

let triangles: Triangle[] = [];
for (let i = 0; i < 6; i++) {
  const triangle = randomTriangle();
  triangles.push(triangle);
}

console.log('  РІВЕНЬ 1 — вставка БЕЗ вирішення колізій');
const ht1 = new HashTable(7);
console.log('\n  Вставка елементів:');
for (const t of triangles) {
  ht1.insertNoCollision(t);
}
console.log('\n  Вміст хеш-таблиці:');
ht1.display();

console.log('\n\n  РІВЕНЬ 2 — вставка з лінійним зондуванням');
const ht2 = new HashTable(7);
console.log('\n  Вставка елементів:');
for (const t of triangles) {
  ht2.insert(t);
}
console.log('\n  Вміст хеш-таблиці:');
ht2.display();

console.log('\n\n  РІВЕНЬ 3 — видалення елементів з периметром більше за 20');
console.log('\n  Видалення елементів:');
ht2.deleteByPerimeter(20);
console.log('\n  Вміст хеш-таблиці після видалення:');
ht2.display();
