import { generateRandomArray, generateSortedArray } from './generators';
import { measureMs } from './measure-time';
import { binarySearch, interpolationSearch } from './search';
import { insertionSort } from './sorting';

const N = 100;
const sizes = [N, N * N, N * N + 90000];

console.log('=== LEVEL 1: Insertion Sort ===');
console.log('Size\tTime (ms)');

for (const size of sizes) {
  const data = generateRandomArray(size);

  const timeMs = measureMs(() => {
    insertionSort(data);
  }, 5);

  console.log(`${size}\t${timeMs}`);
}

console.log('\n=== LEVEL 2: Binary Search vs Interpolation Search ===');
console.log('Size\tBinary (ms)\tInterpolation (ms)');

for (const size of sizes) {
  const sorted = generateRandomArray(size).sort((a, b) => a - b);
  const target = sorted[Math.floor(size / 2)] as number;

  const binaryMs = measureMs(() => {
    binarySearch(sorted, target);
  });

  const interpolMs = measureMs(() => {
    interpolationSearch(sorted, target);
  });

  console.log(`${size}\t${binaryMs}\t${interpolMs}`);
}

const SIZE3 = sizes[2] as number;
const RUNS = 30;

console.log('\n=== LEVEL 3: Best / Worst / Average cases (size = 10000) ===');
console.log('\n-- Insertion Sort --');
console.log('Case\tTime (ms)\tSequence');

const sortTimes: { ms: number; label: string }[] = [];

for (let i = 0; i < RUNS; i++) {
  const data = generateRandomArray(SIZE3);
  const ms = measureMs(() => {
    insertionSort(data);
  }, 1);
  sortTimes.push({ ms, label: `random #${i + 1}` });
}

sortTimes.sort((a, b) => a.ms - b.ms);

const best = sortTimes[0]!;
const worst = sortTimes[sortTimes.length - 1]!;
const avgMs = sortTimes.reduce((s, r) => s + r.ms, 0) / sortTimes.length;

console.log(`Best\t${best.ms}\t${best.label}`);
console.log(`Average\t${avgMs}`);
console.log(`Worst\t${worst.ms}\t${worst.label}`);

console.log('\n-- Binary Search --');
console.log('Case\tTime (ms)');

const sortedForSearch = generateSortedArray(SIZE3);
const binaryTimes: number[] = [];

for (let i = 0; i < RUNS; i++) {
  const target = sortedForSearch[Math.floor(Math.random() * SIZE3)] as number;

  binaryTimes.push(
    measureMs(() => {
      binarySearch(sortedForSearch, target);
    }, 1),
  );
}

binaryTimes.sort((a, b) => a - b);

const binaryAvg = binaryTimes.reduce((s, v) => s + v, 0) / binaryTimes.length;

console.log(`Best\t${binaryTimes[0]}`);
console.log(`Average\t${binaryAvg}`);
console.log(`Worst\t${binaryTimes[binaryTimes.length - 1]}`);

console.log('\n-- Interpolation Search --');
console.log('Case\tTime (ms)');

const interpolTimes: number[] = [];

for (let i = 0; i < RUNS; i++) {
  const target = sortedForSearch[Math.floor(Math.random() * SIZE3)] as number;
  interpolTimes.push(
    measureMs(() => {
      interpolationSearch(sortedForSearch, target);
    }, 1),
  );
}

interpolTimes.sort((a, b) => a - b);

const interpolAvg =
  interpolTimes.reduce((s, v) => s + v, 0) / interpolTimes.length;

console.log(`Best\t${interpolTimes[0]}`);
console.log(`Average\t${interpolAvg}`);
console.log(`Worst\t${interpolTimes[interpolTimes.length - 1]}`);
