import { Triangle } from './triangle';

export const randomTriangle = (min: number = 0, max: number = 15): Triangle => {
  const getRandom = () => Math.floor(Math.random() * (max - min + 1)) + min;

  while (true) {
    const x1 = getRandom(),
      y1 = getRandom();
    const x2 = getRandom(),
      y2 = getRandom();
    const x3 = getRandom(),
      y3 = getRandom();
    const area = Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));

    if (area > 0) {
      return new Triangle(x1, y1, x2, y2, x3, y3);
    }
  }
};
