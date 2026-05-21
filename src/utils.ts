export function printMatrix(name: string, matrix: number[][]): void {
  console.log(`Matrix ${name}:`);
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    if (row !== undefined) {
      console.log(row.map((val) => val.toFixed(4).padStart(10, ' ')).join(' '));
    }
  }
}

export function printVector(name: string, vector: number[]): void {
  console.log(`Vector ${name}:`);
  for (let i = 0; i < vector.length; i++) {
    const val = vector[i];
    if (val !== undefined) {
      console.log(`  [${i}]: ${val.toFixed(4)}`);
    }
  }
}
