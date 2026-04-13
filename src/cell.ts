import { Triangle } from './triangle';

export class Cell {
  triangle: Triangle | null = null;
  isDeleted: boolean = false;
}
