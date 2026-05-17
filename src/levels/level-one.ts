import * as fs from 'fs';
import * as path from 'path';

const REGEX = /^[A-Z]+_?([A-Z]+|\d+)$/;

export function runLevel1(): void {
  const filePath = path.join(__dirname, '../data/words1.txt');
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split(/\r?\n/).filter((line) => line.trim() !== '');

  console.log('Рівень 1: пошук за виразом');
  console.log('/^[A-Z]+_?([A-Z]+|\\d+)$/');
  console.log('');

  for (const line of lines) {
    const word = line.trim();
    const isMatch = REGEX.test(word);
    console.log('  ' + word + ' -> ' + (isMatch ? '+' : '-'));
  }
}
