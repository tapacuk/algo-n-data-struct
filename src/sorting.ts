export function insertionSort(input: number[]): number[] {
  const arr = [...input];
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i] as number;
    let j = i - 1;
    while (j >= 0 && (arr[j] as number) > key) {
      arr[j + 1] = arr[j] as number;
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
