export class Student {
  constructor(
    public lastName: string,
    public course: number,
    public faculty: string,
    public missedClasses: number,
  ) {}

  toString(): string {
    return `[Прізвище: ${this.lastName}, Курс: ${this.course}, Факультет: ${this.faculty}, Пропуски: ${this.missedClasses}]`;
  }
}
