export class Student {
  lastName: string;
  totalClasses: number;
  missedClasses: number;

  constructor(lastName: string, totalClasses: number, missedClasses: number) {
    this.lastName = lastName;
    this.totalClasses = totalClasses;
    this.missedClasses = missedClasses;
  }

  getRatio(): number {
    if (this.totalClasses === 0) return 0;
    return this.missedClasses / this.totalClasses;
  }

  toString(): string {
    const ratio = this.getRatio().toFixed(4);
    return `співвідношення=${ratio} | ${this.lastName} | всього занять: ${this.totalClasses} | пропущено: ${this.missedClasses}`;
  }
}
