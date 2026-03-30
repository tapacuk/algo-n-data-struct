export class IntList {
  data: number[];
  maxSize: number;

  constructor(maxSize: number, data: number[] | null = null) {
    this.data = data == null ? [] : data;
    this.maxSize = maxSize;
  }

  isFull() {
    return this.data.length >= this.maxSize;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  insert(value: number) {
    if (this.isFull()) {
      throw new Error('List is full');
    }

    this.data.push(value);
    return value;
  }

  delete(value: number | null = null) {
    if (this.isEmpty()) {
      throw new Error('List is empty');
    }

    if (value === null) {
      return this.data.pop();
    }

    const index = this.data.indexOf(value);
    if (index !== -1) {
      return this.data.splice(index, 1)[0];
    }

    return undefined;
  }

  copy(maxSize: number | null = null) {
    const localMaxSize = maxSize !== null ? maxSize : this.maxSize;

    return new IntList(localMaxSize, [...this.data]);
  }
}

export class StringDoubleLinkedList {
  data: string[];
  maxSize: number;

  constructor(maxSize: number, data: string[] | null = null) {
    this.data = data !== null ? data : [];
    this.maxSize = maxSize;
  }

  isFull() {
    return this.data.length >= this.maxSize;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  insertBack(value: string) {
    if (this.isFull()) {
      throw new Error('DL List is full');
    }

    this.data.push(value);
    return value;
  }

  insertFront(value: string) {
    if (this.isFull()) {
      throw new Error('DL List is full');
    }

    this.data.unshift(value);
    return value;
  }

  deleteBack() {
    if (this.isEmpty()) {
      throw new Error('DL List is empty');
    }

    return this.data.pop()!;
  }

  deleteFront() {
    if (this.isEmpty()) {
      throw new Error('DL List is empty');
    }

    return this.data.shift()!;
  }

  copy(maxSize: number | null = null) {
    const localMaxSize = maxSize === null ? this.maxSize : maxSize;

    return new StringDoubleLinkedList(localMaxSize, [...this.data]);
  }

  sort(reverse: boolean = false) {
    this.data.sort((a, b) => a.localeCompare(b));

    if (reverse) {
      this.data.reverse();
    }
  }
}
