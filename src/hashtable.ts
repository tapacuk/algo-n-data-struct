import { Triangle } from './triangle';
import { Cell } from './cell';

export class HashTable {
  private size: number;
  private cells: Cell[];

  constructor(size: number) {
    this.size = size;
    this.cells = [];
    for (let i = 0; i < size; i++) {
      this.cells.push(new Cell());
    }
  }

  private hash(key: number) {
    const A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(this.size * ((key * A) % 1));
  }

  insertNoCollision(t: Triangle) {
    const pos = this.hash(t.area());
    const cell = this.cells[pos];
    if (!cell) throw new Error('no cell error');

    if (cell.triangle !== null) {
      console.log(`  [!] Колізія на позиції ${pos}: елемент НЕ вставлено`);
      return false;
    }

    cell.triangle = t;
    console.log(`  [+] Позиція ${pos}: ${t.toString()}`);
    return true;
  }

  insert(t: Triangle) {
    const startPos = this.hash(t.area());

    for (let i = 0; i < this.size; i++) {
      const pos = (startPos + i) % this.size;
      const cell = this.cells[pos];
      if (!cell) throw new Error('no cell error');

      // пуста або видалена комірка підходить для вставки
      if (cell.triangle === null) {
        cell.triangle = t;
        cell.isDeleted = false;

        if (i === 0) {
          console.log(`  [+] Позиція ${pos}: ${t.toString()}`);
        } else {
          console.log(
            `  [~] Позиція ${startPos} зайнята. Нова позиція ${pos}: ${t.toString()}`,
          );
        }
        return;
      }
    }

    console.log(`  [!] Таблиця повна, елемент не вставлено`);
  }

  deleteByPerimeter(maxPerimeter: number) {
    for (let i = 0; i < this.size; i++) {
      const cell = this.cells[i];
      if (!cell) throw new Error('no cell error');

      // видаляє елементи з периметром, більшим від заданого
      if (cell.triangle !== null && cell.triangle.perimeter() > maxPerimeter) {
        console.log(
          `  [-] Видалено з позиції ${i}: ${cell.triangle.toString()}`,
        );
        cell.triangle = null;
        cell.isDeleted = true;
      }
    }
  }

  // ─── Виведення хеш-таблиці ────────────────────────────────
  display(): void {
    console.log(`  Розмір: ${this.size}`);

    for (let i = 0; i < this.size; i++) {
      const cell = this.cells[i];
      if (!cell) throw new Error('no cell error');

      if (cell.isDeleted) {
        console.log(`  [${i}] <видалено>`);
      } else if (cell.triangle === null) {
        console.log(`  [${i}] <порожньо>`);
      } else {
        console.log(
          `  [${i}] KEY: ${cell.triangle.area().toFixed(2)} | ${cell.triangle.toString()}`,
        );
      }
    }
  }
}
