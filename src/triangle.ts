export class Triangle {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;

  constructor(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
  ) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }

  // за формулою векторного добутку
  area() {
    return (
      Math.abs(
        (this.x2 - this.x1) * (this.y3 - this.y1) -
          (this.x3 - this.x1) * (this.y2 - this.y1),
      ) / 2
    );
  }

  perimeter() {
    const a = Math.sqrt((this.x2 - this.x1) ** 2 + (this.y2 - this.y1) ** 2);
    const b = Math.sqrt((this.x3 - this.x2) ** 2 + (this.y3 - this.y2) ** 2);
    const c = Math.sqrt((this.x1 - this.x3) ** 2 + (this.y1 - this.y3) ** 2);
    return a + b + c;
  }

  toString() {
    return (
      `A(${this.x1};${this.y1}) B(${this.x2};${this.y2}) C(${this.x3};${this.y3})` +
      `  Площа=${this.area().toFixed(2)}  Периметр=${this.perimeter().toFixed(2)}`
    );
  }
}
