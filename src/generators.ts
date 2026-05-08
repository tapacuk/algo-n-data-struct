export function generateRandomArray(size: number, maxVal: number = 1000000) {
  const arr: number[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * maxVal));
  }

  return arr;
}

export function generateSortedArray(size: number) {
  const arr: number[] = [];
  for (let i = 0; i < size; i++) {
    arr[i] = i;
  }

  return arr;
}
