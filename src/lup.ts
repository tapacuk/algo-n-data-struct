export class LUP {
  private matrixLength: number;
  private matrix: number[][];
  private constants: number[];
  private L: number[][];
  private P: number[];

  constructor(equations: string[]) {
    this.matrixLength = equations.length;

    this.L = Array.from({ length: this.matrixLength }, () =>
      Array(this.matrixLength).fill(0),
    );

    const parsed = this.equationToMatrix(equations);

    this.matrix = parsed.matrix;
    this.constants = parsed.constants;

    this.setOneForL();
    const changeRow: number = this.moveHighToUp();

    this.P = Array.from({ length: this.matrixLength }, (_, i) => i);

    if (changeRow !== 0) {
      const temp = this.P[0];
      if (temp !== undefined && this.P[changeRow] !== undefined) {
        this.P[0] = this.P[changeRow] as number;
        this.P[changeRow] = temp;
      }
    }
  }

  public decompose(): void {
    for (let i = 0; i < this.matrixLength; i++) {
      const row = this.matrix[i];
      if (!row) continue;

      const pivot = row[i];
      if (pivot === undefined) continue;

      if (Math.abs(pivot) < 1e-12) {
        throw new Error('число є нуль або близько до нуля');
      }

      for (let rowIdx = i + 1; rowIdx < this.matrixLength; rowIdx++) {
        const targetRow = this.matrix[rowIdx];
        if (!targetRow) continue;

        const targetVal = targetRow[i];
        if (targetVal === undefined) continue;

        const x = targetVal / pivot;

        if (this.L[rowIdx] !== undefined) {
          this.L[rowIdx]![i] = x;
        }

        for (let col = i; col < this.matrixLength; col++) {
          const cv = row[col];
          if (cv !== undefined && targetRow[col] !== undefined) {
            targetRow[col]! -= x * cv;
          }
        }
        targetRow[i] = 0.0;
      }
    }
  }

  public calculateSolution(): number[] {
    const y: number[] = new Array(this.matrixLength).fill(0);
    for (let i = 0; i < this.matrixLength; i++) {
      const pIndex = this.P[i];
      if (pIndex !== undefined) {
        const constVal = this.constants[pIndex];
        if (constVal !== undefined) {
          y[i] = constVal;
        }
      }
    }

    for (let col = 1; col < this.matrixLength; col++) {
      let sum = 0;

      for (let row = 0; row < col; row++) {
        const lVal = this.L[col]?.[row];
        const yVal = y[row];
        if (lVal !== undefined && yVal !== undefined) {
          sum += lVal * yVal;
        }
      }

      if (y[col] !== undefined) {
        y[col]! -= sum;
      }
    }

    const x: number[] = new Array(this.matrixLength).fill(0.0);
    for (let i = this.matrixLength - 1; i >= 0; i--) {
      let sum = 0;
      for (let j = i + 1; j < this.matrixLength; j++) {
        const matrixVal = this.matrix[i]?.[j];
        const xVal = x[j];
        if (matrixVal !== undefined && xVal !== undefined) {
          sum += matrixVal * xVal;
        }
      }

      const yVal = y[i];
      const diagVal = this.matrix[i]?.[i];

      if (yVal !== undefined && diagVal !== undefined) {
        x[i] = (yVal - sum) / diagVal;
      }
    }

    const roundVal = (v: number): number => {
      const rv = Number(v.toFixed(12));
      return Math.abs(rv - Math.round(rv)) < 1e-9 ? Math.round(rv) : rv;
    };

    return x.map(roundVal);
  }

  private setOneForL(): void {
    for (let rowIdx = 0; rowIdx < this.matrixLength; rowIdx++) {
      if (this.L[rowIdx] !== undefined) {
        this.L[rowIdx]![rowIdx] = 1;
      }
    }
  }

  private moveHighToUp(): number {
    let maxRowIdx = 0;
    let maxVal = this.matrix[0]?.[0] ?? 0;

    for (let i = 1; i < this.matrixLength; i++) {
      const currentVal = this.matrix[i]?.[0];
      if (currentVal !== undefined && currentVal > maxVal) {
        maxVal = currentVal;
        maxRowIdx = i;
      }
    }

    const firstRow = this.matrix[0];
    const maxRow = this.matrix[maxRowIdx];

    if (
      firstRow &&
      maxRow &&
      firstRow[0] !== undefined &&
      maxRow[0] !== undefined
    ) {
      if (firstRow[0] < maxRow[0]) {
        // Обмін рядків
        this.matrix[maxRowIdx] = [...firstRow];
        this.matrix[0] = [...maxRow];
        return maxRowIdx;
      }
    }

    return 0;
  }

  private equationToMatrix(equations: string[]): {
    matrix: number[][];
    constants: number[];
  } {
    const matrix: number[][] = Array.from(
      { length: equations.length },
      () => [],
    );
    const constants: number[] = [];

    let row = 0;
    for (const equation of equations) {
      const eq = equation.replace(/\s+/g, '');

      const xRegex = /([+-]?\d*)([a-zA-Z])/g;
      const constantMatch = eq.match(/=([+-]?\d+)/);

      if (constantMatch && constantMatch[1] !== undefined) {
        constants.push(parseInt(constantMatch[1], 10));
      } else {
        throw new Error(
          `Equation '${equation}' does not contain a valid constant term.`,
        );
      }

      const coeffs: Record<'x' | 'y' | 'z' | 'w', number> = {
        x: 0,
        y: 0,
        z: 0,
        w: 0,
      };

      let match;
      while ((match = xRegex.exec(eq)) !== null) {
        const coeffStr = match[1];
        const varName = match[2] as keyof typeof coeffs;

        if (coeffs[varName] !== undefined) {
          if (coeffStr === '' || coeffStr === '+') {
            coeffs[varName] += 1;
          } else if (coeffStr === '-') {
            coeffs[varName] -= 1;
          } else {
            coeffs[varName] += parseInt(coeffStr as string, 10);
          }
        }
      }

      matrix[row] = [coeffs['x'], coeffs['y'], coeffs['z'], coeffs['w']];
      row += 1;
    }

    return { matrix, constants };
  }

  public getMatrix(): number[][] {
    return this.matrix;
  }

  public getLowerTriangle(): number[][] {
    return this.L;
  }
}
