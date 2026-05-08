export function binarySearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midVal = arr[mid] as number;

    if (midVal === target) {
      return mid;
    }

    if (midVal < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

export function interpolationSearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (
    low <= high &&
    target >= (arr[low] as number) &&
    target <= (arr[high] as number)
  ) {
    const lowVal = arr[low] as number;
    const highVal = arr[high] as number;

    if (lowVal === highVal) {
      return arr[low] === target ? low : -1;
    }

    const pos =
      low + Math.floor(((target - lowVal) / (highVal - lowVal)) * (high - low));

    const posVal = arr[pos] as number;

    if (posVal === target) {
      return pos;
    }

    if (posVal < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1;
}
